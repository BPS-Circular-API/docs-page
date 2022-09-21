---
sidebar_position: 4
---
import Tabs			from "@theme/Tabs";
import TabItem		from "@theme/TabItem";

# Using /getpng Endpoint

In this tutorial, we will be using the `/getpng` endpoint to get a circular's PNG file.

The `/getpng` endpoint returns a string containing the direct URL to a PNG version of a BPS Circular.


#### Parameters:

* `url` : `string`. A valid URL pointing to a .pdf file on the BPS website [Mandatory]

The `url` parameter refers to the direct circular PDF download URL.


## Example Requests

<Tabs>
<TabItem value="python" label="Python" default>

Here is an example request using Python's `requests` library:

```python
import requests

url = "https://bpsapi.rajtech.me/v1/getpng"
payload = {"url": "https://bpsdoha.net/circular/category/38-circular-ay-2022-23?download=1123"}

request = requests.get(url, json=payload)
print(request.text)
```

</TabItem>
<TabItem value="curl" label="cURL">

Here is an example request using cURL:

```bash
curl -X 'GET' \
  'https://bpsapi.rajtech.me/v1/getpng' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "url": "https://bpsdoha.net/circular/category/38-circular-ay-2022-23?download=1123"
  }'
```


</TabItem>
</Tabs>

## Example Responses

```python
{
  "status": "success",
  "http_status": 200,
  "data": "https://bpsapi.rajtech.me/circularpng/1123.png"
}
```

---

Thanks for reading!