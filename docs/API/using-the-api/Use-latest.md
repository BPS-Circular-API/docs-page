---
sidebar_position: 2
---


# Using /latest Endpoint

In this tutorial, we will be using the `/latest` endpoint to get the latest circular in a category.

This endpoint returns a JSON object containing the latest circular's information.


## Request Structure

Send a GET request to the following URL: `https://bpsapi.rajtech.me/latest/**{category}**`   
or, send a GET request to: `https://bpsapi.rajtech.me/latest?category={category}` (not recommended, legacy way)

{category} here is either a category name (from https://bpsapi.rajtech.me/categories) or a category-id (In https://bpsdoha.com/circular/category/**52**-academic-year-2024-25, 52 is the id)

## Example Requests



<Tabs>


<TabItem value="python" label="Python" default>

Here is an example request using Python's `requests` library:

<Tabs>
<TabItem value="preset" label="Preset Category" default>

```python
import requests

category = "general"
url = f"https://bpsapi.rajtech.me/latest/{category}"

request = requests.get(url)
print(request.text)
```

</TabItem>
<TabItem value="id" label="Category ID">

```python
import requests

category = "52"
url = f"https://bpsapi.rajtech.me/latest/{category}"

request = requests.get(url)
print(request.text)
```

</TabItem>
</Tabs>

</TabItem>



<TabItem value="curl" label="cURL">

Here is an example request using cURL:

<Tabs>
<TabItem value="preset" label="Preset Category" default>


```bash
curl "https://bpsapi.rajtech.me/latest/general"
```

</TabItem>
<TabItem value="id" label="Category ID">

```bash
curl "https://bpsapi.rajtech.me/latest/52"
```

</TabItem>
</Tabs>

</TabItem>



<TabItem value="nodejs" label="Node.js">

Here is an example request using Node.js's `node-fetch` library:

<Tabs>
<TabItem value="preset" label="Preset Category" default>

```js
const fetch = require('node-fetch');

const category = 'general';
const url = `https://bpsapi.rajtech.me/latest/${category}`;

fetch(url)
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
```

</TabItem>
<TabItem value="id" label="Category ID">

```js
const fetch = require('node-fetch');

const category = '52';
const url = `https://bpsapi.rajtech.me/latest/${category}`;

fetch(url)
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
```

</TabItem>
</Tabs>
</TabItem>



</Tabs>



## Example Response

<Tabs>
<TabItem value="preset" label="Preset Category" default>

When getting circulars from the `general` category, the response is a dictionary with the following keys:

```python
{
  "status": "success",
  "http_status": 200,
  "data": {
    "title": "Circular 01 - Public Holiday- Eid-Al-Fitr 2024",
    "link": "https://bpsdoha.com/circular/category/52-academic-year-2024-25?download=1618",
    "id": "1618"
  }
}
```

</TabItem>



<TabItem value="empty category" label="Empty Category">

Here's what you get when you try to get the data from an empty category.

```python
{
  "status": "success",
  "http_status": 200,
  "data": [],
}
```


</TabItem>
<TabItem value="error" label="Error">

Here's what you get when you try to get the data from an empty category.

```python
{
  "status": "error",
  "http_status": 400,
  "error": "Invalid category"
}
```


</TabItem>
</Tabs>


---

Thanks for reading!

import Tabs			from "@theme/Tabs";
import TabItem		from "@theme/TabItem";