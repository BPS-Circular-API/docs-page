---
sidebar_position: 1
---

# Using /list Endpoint

In this tutorial, we will be using the /list endpoint to get a list of 
all circulars in one Category.

This endpoint returns a list containing the all the circular (of the given category)'s title and direct download URL. 


#### Parameters:
* `category` : `string`. Can have values (`general`, `ptm`, `exam`) [Mandatory]
* `receive` : `string`. Can have values (`all`, `titles`, `links`) [Optional]

The `category` parameter refers to one of the 3 main category of circulars on the 
BPS Website.

The `receive` parameter refers to what data you want to receive, either `all` which gives
both the titles and links of all circulars in the category, or `titles` which gives only the titles of all circulars in the category, or `links` which gives only the links of all circulars in the category.


## Example Requests

Python

```python
import requests

url = "https://bpsapi.rajtech.io/v1/list/"
payload = {'category': 'ptm', "receive": "all"}

request = requests.get(url, json=payload)
print(request.text)
```

Curl

```bash
curl -X 'GET' \
  'https://bpsapi.rajtech.io/v1/list/' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "category": "ptm",
  "receive": "all"
      }'
```
  
## Example Responses

1. Category: `ptm`, Receive: `all`

```python
[
    {"title":"2nd Parent Teacher Meeting (PTM) for Grades IX, X & XII","link":"https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1095:2nd-parent-teacher-meeting-ptm-for-grades-ix-x-xii"},
    {"title":"1st Parent Teacher Meeting (PTM) for Grade IX","link":"https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1060:1st-parent-teacher-meeting-ptm-for-grade-ix"},
    {"title":"1st Parent Teacher Meeting (PTM) for Grade VI - VIII","link":"https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1059:1st-parent-teacher-meeting-ptm-for-grade-vi-viii"},
    {"title":"1st Parent Teacher Meeting (PTM) for Grade V","link":"https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1058:1st-parent-teacher-meeting-ptm-for-grade-v"},
    {"title":"1st Parent Teacher Meeting (PTM) for Grade III - IV","link":"https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1057:1st-parent-teacher-meeting-ptm-for-grade-iii-iv"},
    {"title":"1st Parent Teacher Meeting (PTM) for Grade I - II","link":"https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1056:1st-parent-teacher-meeting-ptm-for-grade-i-ii"},
    {"title":"1st Parent Teacher Meeting (PTM) for Grade XII","link":"https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1052:1st-parent-teacher-meeting-ptm-for-grade-xii"},
    {"title":"1st Parent Teacher Meeting (PTM) for Grade X","link":"https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1051:1st-parent-teacher-meeting-ptm-for-grade-x"},
    {"title":"1st Parent Teacher Meeting (PTM) for Kindergarten","link":"https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1050:1st-parent-teacher-meeting-ptm-for-kindergarten"}
]

```

2. Category: `ptm`, Receive: `titles`

```python
[
    "2nd Parent Teacher Meeting (PTM) for Grades IX, X & XII ",
    "1st Parent Teacher Meeting (PTM) for Grade IX",
    "1st Parent Teacher Meeting (PTM) for Grade VI - VIII",
    "1st Parent Teacher Meeting (PTM) for Grade V",
    "1st Parent Teacher Meeting (PTM) for Grade III - IV",
    "1st Parent Teacher Meeting (PTM) for Grade I - II",
    "1st Parent Teacher Meeting (PTM) for Grade XII",
    "1st Parent Teacher Meeting (PTM) for Grade X",
    "1st Parent Teacher Meeting (PTM) for Kindergarten"
]

```


3. Category: `ptm`, Receive: `links`

```python
[
    "https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1095:2nd-parent-teacher-meeting-ptm-for-grades-ix-x-xii",
    "https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1060:1st-parent-teacher-meeting-ptm-for-grade-ix",
    "https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1059:1st-parent-teacher-meeting-ptm-for-grade-vi-viii",
    "https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1058:1st-parent-teacher-meeting-ptm-for-grade-v",
    "https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1057:1st-parent-teacher-meeting-ptm-for-grade-iii-iv",
    "https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1056:1st-parent-teacher-meeting-ptm-for-grade-i-ii",
    "https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1052:1st-parent-teacher-meeting-ptm-for-grade-xii",
    "https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1051:1st-parent-teacher-meeting-ptm-for-grade-x",
    "https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1050:1st-parent-teacher-meeting-ptm-for-kindergarten"
]
```

Thanks for reading!