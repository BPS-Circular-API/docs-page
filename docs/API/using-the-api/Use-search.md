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

- `title` : `string`. The circular name, must contain at least 1 keyword [Mandatory]
- `amount`: `integer`. The amount of circulars to return. Defaults to `1` [Optional]

The `title` parameter refers to the circular name.


## Example Requests

<Tabs>
<TabItem value="python" label="Python" default>

Here is an example request using Python's `requests` library:

```python
import requests

url = "https://bpsapi.rajtech.me/v1/search"
params = {'title': 'mobile', 'amount': 2}

request = requests.get(url, params=params)
print(request.text)
```

</TabItem>
<TabItem value="curl" label="cURL">

Here is an example request using cURL:

```bash
curl -X 'GET' \
  'https://bpsapi.rajtech.me/v1/search?title=mobile&amount=2' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json'
```


</TabItem>


<TabItem value="node.js" label="Node.js">

Here is an example request using Node.js's `node-fetch` library:

```js
import fetch from 'node-fetch';
const url = 'https://bpsapi.rajtech.me/v1/search';
const params = {title: 'mobile', amount: 2};

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
  "data": [
    {
      "title": "Grade X - Syllabus for Half Yearly Exam",
      "link": "https://bpsdoha.com/circular/category/45-exam-time-table-syllabus-2023-24?download=1355",
      "id": "1355"
    },
    {
      "title": "Grade X & XII - Timetable for Half Yearly Exam",
      "link": "https://bpsdoha.com/circular/category/45-exam-time-table-syllabus-2023-24?download=1351",
      "id": "1351"
    }
  ]
}
```

---

Thanks for reading!

import Tabs			from "@theme/Tabs";
import TabItem		from "@theme/TabItem";