import json
import sys

# TODO:
# The pester announcement looks like this:
#   grimAuxiliatrixグリム聖母 [GA][TT] (both tags colored the same)
# Weird off-by-one errors for commands and messages

pestercolors = {
    "EB": "0715cd",
    "TG": "e00707",
    "TT": "b536da",
    "GG": "4ac925",
    "AA": "a10000",
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
    "CC": "77003c"
}


spritecolors = {
    "john": "0715cd",
    "dave": "e00707", # TODO: choose dave spelling
    "rose": "b536da",
    "jade": "4ac925",
    "nannasprite": "????",
    "jaspersprite": "????",
    "calsprite": "????",
    "davesprite": "????",
    "jadesprite": "????",
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

def join_messages(buf):
    res = []
    if len(buf) == 0:
        return res
    curr = buf[0]
    for m in buf[1:]:
        if not m or m[0].isascii():
            res.append(curr)
            curr = m
        else:
            curr = curr + m
    return res

def colorize(s):
    res = s
    for p in pestercolors:
        # these quotes get taken care of later
        spantag = r'<span style="color: #^COLOR^">'.replace('^COLOR^', pestercolors[p])
        # First is ASCII colon, second is Japanese colon
        if res.startswith(p + ":") or res.startswith(p + "："):
            res = spantag + res + '</span><br>' # TODO: this may not work, leaves extra break at the end
            # return res
        elif "[" + p + "]" in res:
            res = res.replace("[" + p + "]", spantag + "[" + p + "]" + '</span>')
    return res

def main():
    with open(f'{sys.argv[1]}.jsonl', 'w') as outfile:
        with open(f'{sys.argv[1]}.html') as file:
            with open('mspa.json', 'r') as hs:
                text = file.read()
                lines = text.split("<br />\n")

                story = json.load(hs)["story"]

                lines.pop(0) # just to get rid of first ----
                while len(lines) > 1:
                    # TODO: check for pesterlogs, somehow
                    page_num = lines.pop(0)
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
                    buf = buf[:-3]

                    # get rid of leading linebreaks
                    while len(buf) > 0 and buf[0] == "<br /><br />":
                        buf.pop(0)


                    buf = join_messages(buf)
                    buf = [colorize(s) for s in buf]

                    content = ''.join(buf)

                    # get rid of santen stuff
                    content = content.replace('<span class="santen">', '')
                    content = content.replace('…</span>', '...')
                    content = content.replace('…', '...')
                    title = title.replace('<span class="santen">', '')
                    title = title.replace('…</span>', '...')
                    title = title.replace('…', '...')

                    # quote stuff, to prevent messing up jsonl and json
                    content = content.replace('"', '\\"')
                    title = title.replace('"', '\\"')


                    # actually render greater than (and less than)
                    content = content.replace('&gt;', '>').replace('&lt;', '<')
                    title = title.replace('&gt;', '>').replace('&lt;', '<')

                    if title.startswith("> "):
                        title = title.removeprefix("> ")
                    if title.startswith(">"):
                        title = title.removeprefix(">")

                    page_id = 1900 + int(page_num)
                    page_idstr = f'{page_id:06}'
                    if story[page_idstr]["content"].startswith("|"):
                        content = story[page_idstr]["content"][0:11] + "<br>" + content

                    outfile.write(f'{{"{page_idstr}": {{"title": "{title}", "content": "{content}"}}}}\n')

if __name__ == "__main__":
    main()
