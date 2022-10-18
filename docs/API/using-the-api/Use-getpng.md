---
sidebar_position: 4
---

# Using /getpng Endpoint

In this tutorial, we will be using the `/getpng` endpoint to get a circular's PNG file.

The `/getpng` endpoint returns a string containing the direct URL to a PNG version of a BPS Circular.


#### Parameters:

-`url` : `string`. A valid URL pointing to a .pdf file on the BPS website [Mandatory]

The `url` parameter refers to the direct circular PDF download URL.


## Example Requests

<Tabs>



<TabItem value="python" label="Python" default>

Here are example requests using Python's `requests` library:


```python
import requests

url = "https://bpsapi.rajtech.me/v1/getpng"
params = {'url': 'https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1147'}

request = requests.get(url, params=params)
print(request.text)
```



</TabItem>



<TabItem value="curl" label="cURL">

Here is are example requests using cURL:



```bash
curl -X 'GET' \
  'https://bpsapi.rajtech.me/v1/getpng?url=https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1147' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' 
```

</TabItem>



<TabItem value="nodejs" label="Node.js">

Here are example requests using Node.js's `node-fetch` library:


```js
import fetch from 'node-fetch';
const url = 'https://bpsapi.rajtech.me/v1/getpng';
const params = {url: 'https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1147'};

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

<TabItem value="success" label="Success" default>


```python
{
  "status": "success",
  "http_status": 200,
  "data": "https://bpsapi.rajtech.me/circularpng/1123.png"
}
```

</TabItem>

<TabItem value="error" label="Error">

```python
{
    "detail": "Invalid URL"
}
```

</TabItem>
</Tabs>


---

Thanks for reading!

import Tabs			from "@theme/Tabs";
import TabItem		from "@theme/TabItem";