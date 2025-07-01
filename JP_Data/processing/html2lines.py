import json
import sys
import re

# TODO:
# The pester announcement looks like this:
#   grimAuxiliatrixグリム聖母 [GA][TT] (both tags colored the same)
# Weird off-by-one errors for commands and messages


handleTranslations = {
    "ectoBiologist": "心霊生物学者",
    "turntechGodhead": "機械仕掛けの神性",
    "tentacleTherapist": "触手セラピスト",
    "gardenGnostic": "物知り庭師",
    "ghostyTrickster": "心霊奇術師",
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
    "cuttlefishCuller": "イカ選定者",
    # "": "", # TODO: this is lazy. does it even work?
}

initials = {
    "EB": "ectoBiologist",
    "GT": "ghostyTrickster", # ghostyTrickster, not golgothasTerror
    "TG": "turntechGodhead",
    "TT": "tentacleTherapist",
    "GG": "gardenGnostic",
    "AA": "apocalypseArisen", # here be trolls
    "AT": "adiosToreador",
    "TA": "twinArmageddons",
    "CG": "carcinoGeneticist",
    "AC": "arsenicCatnip",
    "GA": "grimAuxiliatrix",
    "GC": "gallowsCalibrator",
    "AG": "arachnidsGrip",
    "CT": "centaursTesticle",
    "TC": "terminallyCapricious",
    "CA": "caligulasAquarium",
    "CC": "cuttlefishCuller",
    # "": "", # TODO: this is lazy. does it even work?
}

pestercolors = {
    "EB": "0715cd",
    "GT": "0715cd", # ghostyTrickster, not golgothasTerror
    "TG": "e00707",
    "TT": "b536da",
    "GG": "4ac925",
    "AA": "a10000", # here be trolls
    "AT": "a15000",
    "TA": "a1a100",
    "CG": "626262",
    "AC": "416600",
    "GA": "008141",
    "GC": "008282",
    "AG": "005682",
    "CT": "000056",
    "TC": "2b0057",
    "CA": "6a006a",
    "CC": "77003c",
    ""  : "ffffff" # Doc Scratch
}


# TODO: aradiasprite and equius and probably the rest
spritecolors = {
    "ジョン": "0715cd",
    "デイブ": "e00707", # TODO: choose dave spelling
    "デイヴ": "e00707", # TODO: choose dave spelling
    "ローズ": "b536da",
    "ジェイド": "4ac925", # there better not be an alternate spelling of this
    "ナンナスプライト": "00d5f2",
    "ヤスパーススプライト": "f141ef",
    "カルスプライト": "f2a400",
    "デイヴスプライト": "f2a400", # TODO: spelllllliiiiiiiiing
    "デイブスプライト": "f2a400", # TODO: spelllllliiiiiiiiing
    "アラディアスプライト": "a10000", # here be trolls
    "アラディアボット": "a10000", # here be trolls
    "AT": "a15000",
    "TA": "a1a100",
    "CG": "626262",
    "AC": "416600",
    "マザースプライト": "008141", # I'm guessing it's the same as Kanaya's color
    "ドラゴンスプライト": "008282",
    "AG": "005682",
    "エクィウス": "000056",
    "TC": "2b0057",
    "CA": "6a006a",
    "CC": "77003c",
    "jadesprite": "????" # NOTE: comma
    # "AA": "a10000",
    # "AT": "a15000",
    # "TA": "a1a100",
    # "CG": "626262",
    # "AC": "416600",
    # "GA": "008141",
    # "GC": "008282",
    # "AG": "005682",
    # "CT": "000056",
    # "TC": "2b0057",
    # "CA": "6a006a",
    # "CC": "77003c"
}


replacements = {
    '<span class="santen">': '',
    '…</span>': '...',
    '…': '...',
    '"': '\\"',
    '&quot;': '\\"',
    '&gt;': '>',
    '&lt;': '<',
    'お化けみたないたずら者': '心霊奇術師',
    'デイヴ': 'デイブ',
    'ツインアルマゲドン': '双子のハルマゲドン',
    '黙示録の発生': '黙示の発生',
    'ヒ素またたび': 'ヒ素キャットニップ',
    'ケンタウルスの精巣': 'ケンタウロスの精巣',
    'クモの巣グリップ': 'クモの握',
    'カリギュラ水族館': 'カリギュラの水族館',
    # '］': ']',
    # '［': '[',
}
# たく　ちく <-- japanese space


def in_memo(s):
    return s.startswith('未来') or s.startswith('現在') or s.startswith('過去')


def sanitize(s):
    res = s
    for k in replacements:
        res = res.replace(k, replacements[k])
    return res

# TODO: this only works for pesterlogs, since spritelog messages NEVER start with ASCII, since they're names
def join_pestermessages(buf):
    res = []
    if len(buf) == 0:
        return res
    curr = buf[0]
    for m in buf[1:]:
        if not m or m[0].isascii() or in_memo(m):
            res.append(curr)
            curr = m
        else:
            curr = curr + m
    if curr:
        res.append(curr)
    return res

def join_spritemessages(buf):
    res = []
    if len(buf) == 0:
        return res
    curr = buf[0]
    for m in buf[1:]:
        if not m or (":" in m) or ("：" in m):
            res.append(curr)
            curr = m
        else:
            curr = curr + m
    if curr:
        res.append(curr)
    return res

def colorize(s):
    alternianStyle = True # TODO: change this on and off depending if we're on Alternia or not
    res = s
    for p in pestercolors:
        # TODO: do the mirai CG to FCG stuff here
        # res = res.replace("")
        spantag = r'<span style=\"color: #^COLOR^\">'.replace('^COLOR^', pestercolors[p])

        # Get rid of Japanese square bracket
        res = res.replace('］', ']').replace('［', '[')
        res = res.replace(']　', ']')
        res = res.replace('　[', '[')

        # First is ASCII colon, second is Japanese colon

        # standardize pesterhandle formatting
        for eng, jpn in handleTranslations.items():
            res = res.replace(eng + " " + jpn, eng + jpn)
            res = res.replace(eng + "　" + jpn, eng + jpn)
            res = res.replace(jpn + " [", jpn + "[")
            res = res.replace(jpn + "　[", jpn + "[")

            res = res.replace("過去の" + eng, "<ruby>PAST<rt>過去の</rt></ruby> " + eng)
            res = res.replace("現在の" + eng, "<ruby>CURRENT<rt>現在の</rt></ruby> " + eng)
            res = res.replace("未来の" + eng, "<ruby>FUTURE<rt>未来の</rt></ruby> " + eng)

        eng_colon = False
        jpn_colon = False
        memo_prefixes = ["", "過去", "未来", "現在", "F", "P", "C", "?"]
        if ":" in res or "：" in res:
            for bruh in memo_prefixes:
                eng_colon = eng_colon or res.startswith(bruh + p + ":")
                jpn_colon = jpn_colon or res.startswith(bruh + p +  "：")
                if bruh:
                    eng_colon = eng_colon or res.startswith(bruh + p)
                    jpn_colon = jpn_colon or res.startswith(bruh + p)
        # else:
        #     eng_colon = False
        #     jpn_colon = False

        # this is true when its an individual pester message
        if eng_colon or jpn_colon:
            # check for Doc Scratch
            if p:
                # TODO: this messes with pester announcements
                if res.startswith("現在"):
                    res = "C" + res.removeprefix("現在")
                elif res.startswith("過去"):
                    res = "P" + res.removeprefix("過去")
                elif res.startswith("未来"):
                    res = "F" + res.removeprefix("未来")


                res = spantag + res + '</span><br />' # TODO: this may not work, leaves extra break at the end
            else:
                res = spantag + res[1:] + '</span><br />'
            # return res

        # TODO: [FCG2] and other nonsense
        # Do I have to use regex? I might
        # use memo_prefixes?
        elif "[" in res:
            # [CG], [FCG], [PCG], [CCG], [?CG], [FCG2], etc.

            # yeahitsthere = False
            # for quuux in memo_prefixes:
            #     yeahitsthere = yeahitsthere or quuux + p in res

            if alternianStyle:
                # TRUTH NUKE
                # for eng, jpn in handleTranslations.items():
                # print("[" + p + "]")
                # print(eng + jpn + "[" + p + "]", " --> ", spantag + eng + jpn + "[" + p + "]" + '</span>')

                # print("KEY: ", p)

                if p:
                    eng = initials[p]
                    jpn = handleTranslations[eng]

                    if "[F" + p in res:
                        res = res.replace("<ruby>", spantag + "<ruby>")
                    elif "[C" + p in res:
                        res = res.replace("<ruby>", spantag + "<ruby>")
                    elif "[P" + p in res:
                        res = res.replace("<ruby>", spantag + "<ruby>")
                    elif "[?" + p in res:
                        res = res.replace("<ruby>", spantag + "<ruby>")
                    elif "[" + p in res:
                        # TODO: does this work???
                        res = res.replace(eng + jpn + "[" + p, spantag + eng + jpn + "[" + p)
                    res = res.replace("]", "]" + '</span>')
            else:
                res = res.replace("[" + p + "]", spantag + "[" + p + "]" + '</span>')
        else:
            # Doc Scratch messes everything up.
            # TODO: this still doesnt handle numbers
            if p:
                for lmao in ["2", "3", "4", "5", "6", "7", "8", "9", ""]: # surely it doesn't go above this, right?
                    res = res.replace("未来" + p + lmao, spantag + "F" + p + lmao + "</span>")
                    res = res.replace("過去" + p + lmao, spantag + "P" + p + lmao + "</span>")
                    res = res.replace("現在" + p + lmao, spantag + "C" + p + lmao + "</span>")
                    res = res.replace("F" + p + lmao, spantag + "F" + p + lmao + "</span>")
                    res = res.replace("P" + p + lmao, spantag + "P" + p + lmao + "</span>")
                    res = res.replace("C" + p + lmao, spantag + "C" + p + lmao + "</span>")

    for sp in spritecolors:
        # TODO: consolidate with above
        spantag = r'<span style=\"color: #^COLOR^\">'.replace('^COLOR^', spritecolors[sp])
        if res.startswith(sp + ":") or res.startswith(sp + "："):
            res = spantag + res + '</span><br />'

    endswithbreak = res.endswith("<br>") or res.endswith("<br/>") or res.endswith("<br />")
        
    if not endswithbreak:
        res = res + "<br />"

    return res

def main():
    skipped = 0
    with open(f'JSONL/{sys.argv[1]}.jsonl', 'w') as outfile:
        with open(f'HTML/{sys.argv[1]}.html') as file:
            with open('mspa.json', 'r') as hs:
                text = file.read()
                lines = text.split("<br />\n")
                # lines = text.split("<br>\n") # this is how Act 3's html does linebreaks

                story = json.load(hs)["story"]

                lines.pop(0) # just to get rid of first ----
                while len(lines) > 1:
                    # print("lines - ", lines[:4])
                    # TODO: check for pesterlogs, somehow
                    page_num = lines.pop(0)
                    # print(page_num)
                    page_id = 1900 + int(page_num) + skipped
                    page_idstr = f'{page_id:06}'

                    # I still don't know why this happens
                    if page_idstr == '004299':
                        page_idstr = '004300'
                        skipped = 1
                    elif page_idstr == '004315' and skipped == 1:
                        page_idstr = '004314'
                        skipped = 0

                    # sometimes formatting is inconsistent, so we have to do this:
                    title = ''
                    while not title:
                        title = lines.pop(0)
                    buf = []

                    # print(lines[-10:])
                    while lines[0] != '----':
                        upnext = lines.pop(0)
                        if not upnext:
                            upnext = "<br /><br />"
                        buf.append(upnext)

                    lines.pop(0) # to clear the ----
                    buf = buf[:-3] # :-3

                    # get rid of leading linebreaks
                    while len(buf) > 0 and buf[0] == "<br /><br />":
                        buf.pop(0)

                    is_log = False
                    # only for logs
                    if story[page_idstr]["content"].startswith("|"):
                        is_log = True
                        if story[page_idstr]["content"].startswith("|PESTER"):
                            buf = join_pestermessages(buf)
                        elif story[page_idstr]["content"].startswith("|SPRITE"):
                            buf = join_spritemessages(buf)
                    buf = [colorize(sanitize(s)) for s in buf]
                        # if page_idstr == '004221':
                        #     print("pre buf", buf)
                        #     buf = [sanitize(s) for s in buf]
                        #     print("sanitized buf", buf)
                        #     buf = [colorize(s) for s in buf]
                        #     print("colorized buf", buf)
                        # else:
                        #     buf = [colorize(sanitize(s)) for s in buf]

                    content = (story[page_idstr]["content"][0:11] + "<br>" if is_log else '') + ''.join(buf)

                    # content = sanitize(content)
                    title = sanitize(title)

                    if title.startswith("> "):
                        title = title.removeprefix("> ")
                    if title.startswith(">"):
                        title = title.removeprefix(">")


                    outfile.write(f'{{"{page_idstr}": {{"title": "{title}", "content": "{content}"}}}}\n')

if __name__ == "__main__":
    main()
