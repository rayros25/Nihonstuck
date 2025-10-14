import json
import sys
import re

with open('../hsjp.json', 'r') as jp, open('mspa.json', 'r') as hs:
    story = json.load(hs)["story"]
    jp_story = json.load(jp)

    url = "https://file.garden/aOgKdPFhxWt7Kb9m" # + "/storyfiles/hs2/00002.gif"

    curr_p  = 26                        # current page number
    curr_id = f'{1900 + curr_p:06}'     # current MPSA page ID
    curr = story[curr_id]
    jp_curr = jp_story[curr_id]
    media = story[curr_id]["media"]

    hasFlash = False

    while (not hasFlash):
        # print
        print(f"PAGE {curr_p}")
        # set up for next page
        print(f"COMMAND:\n{jp_curr["title"]}")
        body = ""
        for m in media:
            body += f'[img]{url + m}[/img]<br><br>'
        text = jp_curr["content"]
        if text.startswith("|"):
            match text[0:11]:
                case "|PESTERLOG|":
                    text = text.removeprefix("|PESTERLOG|")
                    text = '[spoiler open="ペスターログを表示" close="ペスターログを非表示"]' + text + '[/spoiler]'
                case _:
                    raise Exception("Unhandled case")
        body += text
        if body.endswith('<br><br>'):
            body = body.removesuffix('<br><br>')
        print(f"BODY:\n{body}")
        print("----")
        curr_p += 1
        curr_id = f'{1900 + curr_p:06}'
        jp_curr = jp_story[curr_id]
        media = story[curr_id]["media"]

        for m in media:
            if not m.endswith(".gif"):
                hasFlash = True
