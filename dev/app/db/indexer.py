import json
from pprint import pprint

json_data=open("frames.json")
data = json.load(json_data)
json_data.close()


def addIndex2(obj, idx):
	obj["index"] = idx
	return obj

result = [addIndex2(data[x], x) for x in range(len(data))]

with open('frames2.json', 'w') as outfile:
	json.dump(result, outfile, sort_keys=True, indent = 4)