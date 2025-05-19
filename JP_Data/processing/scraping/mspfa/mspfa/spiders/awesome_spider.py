import scrapy
from bs4 import BeautifulSoup

class AwesomeSpider(scrapy.Spider):
    name = "awesome"

    handleTranslations = {
            "ectoBiologist": "心霊生物学者",
            "turntechGodhead": "機械仕掛けの神性",
            "tentacleTherapist": "触手セラピスト",
            "gardenGnostic": "物知り庭師",
            "ghostyTrickster": "お化けみたないたずら者", # 心霊奇術師
            "carcinoGeneticist": "カルチノ遺伝学者",
            "grimAuxiliatrix": "グリム聖母",
            "adiosToreador": "アディオス闘牛士",
            "apocalypseArisen": "黙示の発生",
            "twinArmageddons": "双子のハルマゲドン",
            "arsenicCatnip": "ヒ素キャットニップ",
            "gallowsCalibrator": "絞首台校正器",
            "arachnidsGrip": "クモの握",
            "centaursTesticle": "ケンタウロスの精巣",
            "terminallyCapricious": "救いがたいほど気まぐれ",
            "caligulasAquarium": "カリギュラの水族館",
            "cuttlefishCuller": "イカ選定者"
            }

    def start_requests(self):
        # GET request
        # yield scrapy.Request("https://httpbin.org/get", meta={"playwright": True})
        # POST request
        # yield scrapy.FormRequest(
        #     url="https://httpbin.org/post",
        #     formdata={"foo": "bar"},
        #     meta={"playwright": True},
        # )
        error_pages = [268, 326, 696, 1039, 1049, 1062]
        for i in error_pages:
            yield scrapy.Request("https://mspfa.com/?s=41348&p=" + str(i), meta={"playwright": True})
        # for i in error_id:
        #     yield scrapy.Request("https://mspfa.com/?s=41348&p=" + str(i - 1900), meta={"playwright": True})

    def parse(self, response, **kwargs):
        # 'response' contains the page as seen by the browser

        page_num = int(response.url.removeprefix("https://mspfa.com/?s=41348&p="))
        id_num = 1900 + page_num

        try:
            soup = BeautifulSoup(response.css('div#content span').get(), 'html.parser')
            # get rid of outermost <span>
            soup.span.unwrap()

            # get rid of any <img>s
            for tag in soup("img"):
                tag.decompose()
            # same for iframe
            for tag in soup("iframe"):
                tag.decompose()

            # get rid of leading and trailing <br>s
            content = str(soup)
            while content.startswith("<br/>"):
                content = content.removeprefix("<br/>")
            while content.endswith("<br/>"):
                content = content.removesuffix("<br/>")

            # handle pages w/o text
            if response.text == "":
                content = ""

            # Log Handling:
            # TODO: Are there pages with a log and also something else? Like another log?
            if content.startswith("<div class=\"spoiler closed\">"):

                # TODO: get logtype
                # TODO: also SPRITELOG, RECAP LOG (used sparingly), JOURNALOG, SRIOUSBIZ, AUTHORLOG, TRKSTRLOG
                logtype = "PESTERLOG"

                soup = BeautifulSoup(content, 'html.parser')
                soup.div.unwrap()
                soup.select_one("div").decompose()
                soup.div.unwrap()
                content = f"|{logtype}|<br />" + str(soup)

                # TODO: why doesn't this work?
                for eng, jpn in self.handleTranslations.items():
                    content.replace(eng + jpn, f'<ruby>{eng}<rt>{jpn}</rt></ruby>')


            yield { 
                f'{id_num:06}': {
                    "title": response.css('div#command span::text').get(), # TODO: are there ever multiline commands?
                    "content": content
                }
            }

        except Exception as e:
            yield {
                    "ERROR" : { "page_num": page_num, "e": e }
                    }
