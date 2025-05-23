import json
import sys

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
    "cuttlefishCuller": "イカ選定者"
}


# with open('hsjp_sorted.jsonl', 'r') as json_file:
with open(f'{sys.argv[1]}.jsonl', 'r') as json_file:
    json_list = list(json_file)

final_output = {}

for json_str in json_list:
    for eng, jpn in handleTranslations.items():
        json_str = json_str.replace(jpn + " ", jpn)
        json_str = json_str.replace(eng + jpn, f'<ruby>{eng}<rt>{jpn}</rt></ruby>')
        json_str = json_str.replace(eng + " " + jpn, f'<ruby>{eng}<rt>{jpn}</rt></ruby>')
        json_str = json_str.replace(eng + "　" + jpn, f'<ruby>{eng}<rt>{jpn}</rt></ruby>')
        # json_str = json_str.replace('</ruby> [' eng + "　" + jpn, f'')


    result = json.loads(json_str)

    for key in result:
        final_output[key] = result[key]
    # result is a dict
    # print(f"result: {result}")

json_object = json.dumps(final_output, indent=4, ensure_ascii=False).encode("utf8")

# Writing to sample.json
with open(f'{sys.argv[1]}.json', "wb") as outfile:
    outfile.write(json_object)
