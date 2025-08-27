import json
import sys
import re


html_repl = {
    '<span class="santen">': '',
    '…</span>': '...',
    '…': '...',
    '"': '\\"',
    '&quot;': '\\"',
    '&gt;': '>',
    '&lt;': '<',
    '【': '[',
    '】': ']',
    '］': ']',
    '［': '[',
    '＝＝＞': '==>',
    '＞＝＝＞': '>==>',
}

jpn_txt_repl = {
    'デイヴ': 'デイブ',
    'エクイウス': 'エクィウス',
    'ジェード': 'ジェイド',
    'お化けみたないたずら者': '心霊奇術師',
    'ツインアルマゲドン': '双子のハルマゲドン',
    '黙示録の発生': '黙示の発生',
    'ヒ素またたび': 'ヒ素キャットニップ',
    'ケンタウルスの精巣': 'ケンタウロスの精巣',
    'クモの巣グリップ': 'クモの握',
    'カリギュラ水族館': 'カリギュラの水族館',
}


japanesenames = {
    "ジョン": "EB",
    "デイブ": "TG", 
    "デイヴ": "TG", 
    "ローズ": "TT",
    "ジェイド": "GG", 
    "アラディア": "AA",
    "タヴロス": "AT",
    "ソラックス": "TA",
    "カーカット": "CG",
    "ネペタ": "AC",
    "カナヤ": "GA",
    "テレジ": "GC",
    "ヴリスカ": "AG",
    "エクィウス": "CT",
    "ガムジー": "TC",
    "エリダン": "CA",
    "フェフェリ": "CC"
}

nums = {
        '１': '1',
        '２': '2',
        '３': '3',
        '４': '4',
        '５': '5',
        '６': '6',
        '７': '7',
        '８': '8',
        '９': '9',
        '０': '0'
        }


# turn Japanese numbers to ASCII numbers
# if it starts with a number, check if you can turn the whole line into a number
# if so, IT'S A NEW PAGE

# that line is page number

# next line should be a break? maybe?

# next line is body text

# put breaks in between these lines

# REPLACE BRACES AND SEMICOLONS WITH PROPER ONES

# if it's EB[john] turn that into EB
# If it's [john] turn that into john
# TODO: consider Doc Scratch?

# keep reading lines until you hit a number

# the line right before is the next page's command.
# maybe start by reading in a command?

# For commands, replace &gt; with >
# Replace JPN > with ASCII >
# Remove prefix "> " and ">"

# TODO: "＞＝＝＞" as blank page


def full_replace(s, dic):
    for n in dic:
        s = s.replace(n, dic[n])
    return s


def main():
    with open(f'{sys.argv[1]}.txt', 'w')  as outfile, open(f'HTML/{sys.argv[1]}.html') as infile, open('mspa.json', 'r') as hs:
        text = infile.read()
        lines = text.split("<br />\n")

        while len(lines) > 1:
            # page_num = lines.pop(0)
            # page_num = full_replace(page_num, nums)

            curr = lines.pop(0)

            curr = full_replace(curr, html_repl)
            curr = full_replace(curr, jpn_txt_repl)

            for name, initials in japanesenames.items():
                curr = curr.replace(f'{initials}[{name}]', initials)

            outfile.write(curr + "\n")


        # story = json.load(hs)["story"]


if __name__ == "__main__":
    main()


# PAGE NUMBER
# COMMAND
# BODYTEXT
# BODYTEXT
# BODYTEXT
# NEXTCOMMAND
# PAGE NUMBER
