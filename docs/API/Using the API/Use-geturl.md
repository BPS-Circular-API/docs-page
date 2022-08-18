---
sidebar_position: 3
---
# Using /search Endpoint

In this tutorial, we will be using the /search endpoint to get a circular's download URL.
The /search endpoint returns a string containing the download URL of the circular, taking the circular title as a parameter.

This endpoint returns a string (or None if not found) containing the download URL of the circular.

#### Parameters:

* `title` : `string`. The circular name, should match one on the website [Mandatory]

The `title` parameter refers to the circular name, which matches the original circular name on the website.


## Example Requests

Python 

```python
import requests

url = "https://raj.moonball.io/bpsapi/v1/search/"
payload = {'title': '2nd Parent Teacher Meeting (PTM) for Grades IX, X & XII'}

request = requests.get(url, json=payload)
print(request.text)
```

Curl

```bash
curl -X 'GET' \
  'https://raj.moonball.io/bpsapi/v1/search/' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{"title": "2nd Parent Teacher Meeting (PTM) for Grades IX, X & XII"}'
```

## Example Responses


```python
"https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1095:2nd-parent-teacher-meeting-ptm-for-grades-ix-x-xii"
```

Thanks for reading!