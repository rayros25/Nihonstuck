import json
import sys
import re


html_repl = {
    '<span class="santen">': '',
    '…</span>': '...',
    '…': '...',
    '"': '\\"',
    '&quot;': '\\"',
    '＝＝＞': '==>',
    '＞＝＝＞': '>==>',
    '&gt;': '>',
    '&lt;': '<',
    '【': '[',
    '】': ']',
    '］': ']',
    '［': '[',
    '：': ':', # TODO: this is the right colon, right?

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
    'ナナスプライト': 'ナンナスプライト',
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
    "フェフェリ": "CC",
    "ナンナスプライト": "ERROR",
    "デイブスプライト": "ERROR",
    "ヤスパーススプライト": "ERROR",
    'ジェイドスプライト': 'ERROR',
    # "becsprite": "ERROR",
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
    with open(f'TXT/{sys.argv[1]}.txt', 'w')  as outfile, open(f'HTML/{sys.argv[1]}.html') as infile, open('mspa.json', 'r') as hs:
        text = infile.read()
        lines = text.split("<br />\n")

        # expected_page_num = 2626
        expected_page_num = 3030
        page_num = -1
        # last_line = "[S] ACT 5 ACT 2 ==>"
        last_line = ""
        while len(lines) > 2:
            curr = ""
            body_text = ""
            command = ""

            curr = lines.pop(0)
            print(f"CURR (page num): [ {curr} ]")
            if curr.strip().isdigit():
                page_num = int(curr)
                print("STARTING pg", page_num)
            else:
                raise Exception("Bad formatting")

            if page_num != expected_page_num:
                if expected_page_num == 3038 or expected_page_num == 3088:
                    expected_page_num += 1
                else:
                    raise Exception(f"Expected page {expected_page_num}, got {page_num}")

            # clear top of extra blank lines (if any)
            while not lines[0]:
                print("blank pop!")
                lines.pop(0)


            # one-liner
            if lines[1].strip().isdigit():
                print("one-liner")
                body_text = ""
                command = lines.pop(0)
                command = full_replace(command, html_repl)
                command = full_replace(command, jpn_txt_repl)
                command = command.replace("＞", ">").removeprefix(">").removeprefix("> ")
                last_line = command
                command = ""
                print(f"COMMAND: [ {command} ]")
            # big boy
            else:
                print("big loop")
                print(f"COMMAND?: [ {curr} ]")
                maybecommand = lines.pop(0)
                maybecommand = full_replace(maybecommand, html_repl)
                maybecommand = full_replace(maybecommand, jpn_txt_repl)
                while not lines[1].strip().isdigit():
                    # print(f"CURR: [ {curr} ]")
                    curr = lines.pop(0)

                    curr = full_replace(curr, html_repl)
                    curr = full_replace(curr, jpn_txt_repl)

                    for name, initials in japanesenames.items():
                        curr = curr.replace(f'{initials}[{name}]', initials)

                    # if not lines[0].isdigit():
                    body_text += "\n" + curr.strip()
                # get rid of extra breaks at the end
                while body_text.endswith("\n"):
                    body_text = body_text.removesuffix("\n")
                while body_text.startswith("\n"):
                    body_text = body_text.removeprefix("\n")

                maybecommand = maybecommand.replace("＞", ">").removeprefix(">").removeprefix("> ").strip()
                last_line = last_line.replace("＞", ">").removeprefix(">").removeprefix("> ").strip()

                if last_line != maybecommand:
                    body_text = maybecommand + "\n" + body_text
                    command = last_line
                else:
                    command = maybecommand
                
                last_line = lines.pop(0)
                last_line = full_replace(last_line, html_repl)
                last_line = full_replace(last_line, jpn_txt_repl).strip()


            for n in japanesenames:
                body_text = body_text.replace(f"[{n}]:", n + ":")
            expected_page_num += 1
            if not command:
                command = "==>"
            outfile.write(f"{page_num}\n{command.strip()}\n{body_text}\n----\n")
        # story = json.load(hs)["story"]


if __name__ == "__main__":
    main()





# prev last line
# PAGENUM
# command? (in question)
#
# woiefjoiwefjw
# last line <-- guaranteed!

# careful what you compare



# PAGE NUMBER
# COMMAND
# BODYTEXT
# BODYTEXT
# BODYTEXT
# NEXTCOMMAND
# PAGE NUMBER
