import json

with open('dz_act5part2.jsonl', 'r') as json_file:
    json_list = list(json_file)

missing = []
final_output = {}

for json_str in json_list:
    result = json.loads(json_str)

    for key in result:
        final_output[key] = result[key]

    # result is a dict
    # print(f"result: {result}")


for i in range(2290, 2626):
    numb = 1900 + i
    strid = f'{numb:06}'

    try:
        _ = final_output[strid]
    except KeyError:
        missing.append(i)

print("MISSING:", missing)
