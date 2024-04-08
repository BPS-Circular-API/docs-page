---
sidebar_position: 4
---


# Using /categories Endpoint

In this tutorial, we will be using the `/categories` endpoint to get the available primary categories
The `/categories` endpoint returns a list containing the names of the primary categories, which can then be passed in
as category names while using the other endpoints.


## Example Requests

<Tabs>
<TabItem value="python" label="Python" default>

Here is an example request using Python's `requests` library:

```python
import requests

url = "https://bpsapi.rajtech.me/categories"

request = requests.get(url)
print(request.text)
```

</TabItem>
<TabItem value="curl" label="cURL">

Here is an example request using cURL:

```bash
curl -X 'GET' \
  'https://bpsapi.rajtech.me/categories' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json'
```


</TabItem>


<TabItem value="node.js" label="Node.js">

Here is an example request using Node.js's `node-fetch` library:

```js
import fetch from 'node-fetch';
const url = 'https://bpsapi.rajtech.me/categories';

fetch(
    url,
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


```json
{
  "status": "success",
  "http_status": 200,
  "data": [
    "general",
    "exam"
  ]
}
```

---

Thanks for reading!

import Tabs			from "@theme/Tabs";
import TabItem		from "@theme/TabItem";