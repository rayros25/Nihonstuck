import json
import sys
import re


acts = [ "hsjp", "dz_act3", "dz_intermission", "dz_act4", "dz_act5act1", "a5a2_one", "a5a2_two", "a5a2_three" ]

with open('mspa.json', 'r') as hs:
    story = json.load(hs)["story"]

    for a in acts:
        with open(f'../{a}.json', 'r') as actfile:
            curr_act = json.load(actfile)

            for id in curr_act:
                # print(id)
                test = ""
                try:
                    test = curr_act[id]["content"]
                except:
                    test = ""
                if test and not story[id]["content"]:
                    print(f'id:{id}, page:{int(id) - 1900}')
