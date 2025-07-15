---
sidebar_position: 5
---

# Using /getpng Endpoint

In this tutorial, we will be using the `/new-circulars` endpoint to get a circular's PNG file.

The `/getpng` endpoint returns a list of circulars posted with their circular ids greater than the provided circular ID

## Request Structure

Send a GET request to the following URL: `https://bpsapi.rajtech.me/new-circulars/{circular_id}`

circular_id is any valid (or invalid) circular ID

If circular_id is not provided, all circulars of the named categories (bpsapi.rajtech.me/categories) since the start will be returned


#### Parameters:

- `url` : `string`. A valid URL pointing to a .pdf file on the BPS website [Mandatory]

The `url` parameter refers to the direct circular PDF download URL.


## Example Requests

<Tabs>



<TabItem value="python" label="Python" default>

Here are example requests using Python's `requests` library:


```python
import requests

url = "https://bpsapi.rajtech.me/new-circulars/1948"

request = requests.get(url)
print(request.text)
```



</TabItem>



<TabItem value="curl" label="cURL">

Here is are example requests using cURL:



```bash
curl -X 'GET' \
  'https://bpsapi.rajtech.me/new-circulars/1948' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' 
```

</TabItem>



<TabItem value="nodejs" label="Node.js">

Here are example requests using Node.js's `node-fetch` library:


```js
import fetch from 'node-fetch';
const url = 'https://bpsapi.rajtech.me/getpng';

fetch(
    `${url}`,
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



```python
// https://bpsapi.rajtech.me/new-circulars/1976

{
  "status": "success",
  "http_status": 200,
  "data": [
    {
      "title": "Revised changes in the Academic Calendar & Winter Vacation for the AY 2025 – ‘26",
      "link": "https://bpsdoha.com/circular/category/55-academic-year-2025-26?download=1978",
      "id": "1978",
      "category": "general"
    },
    {
      "title": "CBSE Class X Board Examinations from 2026 – Key Highlights",
      "link": "https://bpsdoha.com/circular/category/55-academic-year-2025-26?download=1977",
      "id": "1977",
      "category": "general"
    }
  ]
}
```



---

Thanks for reading!

import Tabs			from "@theme/Tabs";
import TabItem		from "@theme/TabItem";