---
sidebar_position: 5
---

# Using /getpng Endpoint

In this tutorial, we will be using the `/getpng` endpoint to get a circular's PNG file.

The `/getpng` endpoint returns a dict containing the direct URL to a PNG version of a BPS Circular.


## Request Structure

Send a GET request to the following URL: `https://bpsapi.rajtech.me/getpng?url={circular_url}`

#### Parameters:

- `url` : `string`. A valid URL pointing to a .pdf file on the BPS website [Mandatory]

The `url` parameter refers to the direct circular PDF download URL.


## Example Requests

<Tabs>



<TabItem value="python" label="Python" default>

Here are example requests using Python's `requests` library:


```python
import requests

url = "https://bpsapi.rajtech.me/getpng"
params = {'url': 'https://bpsdoha.com/circular/category/52-academic-year-2024-25?download=1618'}

request = requests.get(url, params=params)
print(request.text)
```



</TabItem>



<TabItem value="curl" label="cURL">

Here is are example requests using cURL:



```bash
curl -X 'GET' \
  'https://bpsapi.rajtech.me/getpng?url=https://bpsdoha.com/circular/category/52-academic-year-2024-25?download=1618' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' 
```

</TabItem>



<TabItem value="nodejs" label="Node.js">

Here are example requests using Node.js's `node-fetch` library:


```js
import fetch from 'node-fetch';
const url = 'https://bpsapi.rajtech.me/getpng';
const params = {url: 'https://bpsdoha.com/circular/category/52-academic-year-2024-25?download=1618'};

fetch(
    `${url}?${new URLSearchParams(params)}`,
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    .then( (res) => res.json())
    .then( (res) => console.log(res));
```

</TabItem>



</Tabs>

## Example Responses

<Tabs>

<TabItem value="single-page" label="Single Page" default>

Here's a circular with a single page: 

```python
{
  "status": "success",
  "http_status": 200,
  "data": [
    "https://bpsapi.rajtech.me/circular-image/1618.png"
  ]
}
```

</TabItem>

<TabItem value="multiple-page" label="Multiple Pages" default>

Here's a circular with multiple pages:

```python
{
  "status": "success",
  "http_status": 200,
  "data": [
    "https://bpsapi.rajtech.me/circular-image/1147.png",
    "https://bpsapi.rajtech.me/circular-image/1147-2.png",
    "https://bpsapi.rajtech.me/circular-image/1147-3.png",
    "https://bpsapi.rajtech.me/circular-image/1147-4.png"
  ]
}
```

</TabItem>

<TabItem value="error" label="Error">

```python
{
    "status": "error",
    "http_status": 400,
    "detail": "Invalid URL"
}
```

</TabItem>
</Tabs>


---

Thanks for reading!

import Tabs			from "@theme/Tabs";
import TabItem		from "@theme/TabItem";