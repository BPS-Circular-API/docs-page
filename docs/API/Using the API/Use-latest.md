---
sidebar_position: 2
---

# Using /latest Endpoint

In this tutorial, we will be using the /latest endpoint to get a list of 
all circulars in one Category.

This endpoint returns a dictionary (for `receive` being `all`) or string (for `receive` being `titles`/`links`, )containing the latest circular (of the given category)'s title and direct download URL.


#### Parameters:
* `category` : `string`. Can have values (`general`, `ptm`, `exam`) [Mandatory]
* `receive` : `string`. Can have values (`all`, `titles`, `links`) [Optional]

The `category` parameter refers to one of the 3 main category of circulars on the 
BPS Website.

The `receive` parameter refers to what data you want to receive, either `all` which gives
the latest circular's Name and download URL, or `titles` which gives only the latest circular's Name, or `links` which gives only the latest circular's download URL.

## Example Requests

Python


```python
import requests

url = "https://raj.moonball.io/bpsapi/v1/latest/"
payload = {'category': 'ptm', "receive": "all"}

request = requests.get(url, json=payload)
print(request.request)
```

Curl

```bash
curl -X 'GET' \
  'https://raj.moonball.io/bpsapi/v1/latest/' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "category": "ptm",
  "receive": "all"
      }'
```

## Example Response

1. Category: `ptm`, Receive: `all`

```python
{"title":"2nd Parent Teacher Meeting (PTM) for Grades IX, X & XII",
"link":"https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1095:2nd-parent-teacher-meeting-ptm-for-grades-ix-x-xii"}
```

2. Category: `ptm`, Receive: `titles`

```python
"2nd Parent Teacher Meeting (PTM) for Grades IX, X & XII"
```

3. Category: `ptm`, Receive: `links`

```python
"https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1095:2nd-parent-teacher-meeting-ptm-for-grades-ix-x-xii"
```

Thanks for reading!