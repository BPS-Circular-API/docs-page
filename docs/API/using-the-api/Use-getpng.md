---
sidebar_position: 4
---
# Using /getpng Endpoint

In this tutorial, we will be using the `/getpng` endpoint to get a circular's PNG file.
The `/search` endpoint returns a string containing the direct URL to the PNG file.


#### Parameters:

* `url` : `string`. The PDF's URL [Mandatory]

The `url` parameter refers to the direct circular PDF download URL.


## Example Requests

Python 

```python
import requests

url = "https://bpsapi.rajtech.me/v1/getpng/"
payload = {"url": "https://bpsdoha.net/circular/category/38-circular-ay-2022-23?download=1123"}

request = requests.get(url, json=payload)
print(request.text)
```

Curl

```bash
curl -X 'GET' \
  'https://bpsapi.rajtech.me/v1/getpng/' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{"url": "https://bpsdoha.net/circular/category/38-circular-ay-2022-23?download=1123"}'
```

## Example Responses


```python
"https://bpsapi.rajtech.me/circularpng/1123.png"
```
---

Thanks for reading!