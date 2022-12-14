---
sidebar_position: 3
---


# Using /search Endpoint

In this tutorial, we will be using the `/search` endpoint to get a circular's download URL and Title.
The `/search` endpoint returns a string containing the download URL of the circular, taking keywords of the actual title of the circular.

This endpoint returns a list (or None if not found) containing the download URL and title of the circular.  
It basically uses a search algorithm to find the circular based on the keywords.

Example: Input being `mobile`, it finds the circular `Mobile Phone Usage Policy` and returns the download URL too.


#### Parameters:

-`title` : `string`. The circular name, must contain at least 1 keyword [Mandatory]

The `title` parameter refers to the circular name.


## Example Requests

<Tabs>
<TabItem value="python" label="Python" default>

Here is an example request using Python's `requests` library:

```python
import requests

url = "https://bpsapi.rajtech.me/v1/search"
params = {'title': 'mobile'}

request = requests.get(url, params=params)
print(request.text)
```

</TabItem>
<TabItem value="curl" label="cURL">

Here is an example request using cURL:

```bash
curl -X 'GET' \
  'https://bpsapi.rajtech.me/v1/search?title=mobile' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json'
```


</TabItem>


<TabItem value="node.js" label="Node.js">

Here is an example request using Node.js's `node-fetch` library:

```js
import fetch from 'node-fetch';
const url = 'https://bpsapi.rajtech.me/v1/search';
const params = {title: 'mobile'};

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



## Example Response


```python
{
  "status": "success",
  "http_status": 200,
  "data": {
    "title": "Mobile Phone Usage Policy",
    "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1108",
    "id": "1108"
  }
}
```

---

Thanks for reading!

import Tabs			from "@theme/Tabs";
import TabItem		from "@theme/TabItem";