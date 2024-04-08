---
sidebar_position: 1
---


# Using /list Endpoint

In this tutorial, we will be using the `/list` endpoint to get a list of all circulars in a single category.

This endpoint returns a JSON object containing the list of circulars in the category.


## Parameters

- `category` : `string` or `int`. Needs to be either one of the categories (for a list, visit https://bpsapi.rajtech.me/categories) or a BPS Category ID (int) [Mandatory]

The `category` parameter refers to any one of the categories of circulars on the BPS Website. 

The category ID can be found in the URL of the circulars page of the BPS Website, like here `https://bpsdoha.com/circular/category/52-academic-year-2024-25`, 52 is the ID



## Example Requests

<Tabs>



<TabItem value="python" label="Python" default>

Here are example requests using Python's `requests` library:

<Tabs>
<TabItem value="general" label="General" default>

```python
import requests

url = "https://bpsapi.rajtech.me/list"
params = {'category': 'general'}

request = requests.get(url, params=params)
print(request.text)
```

</TabItem>
<TabItem value="ptm" label="PTM">

```python
import requests

url = "https://bpsapi.rajtech.me/list"
params = {'category': 'ptm'}

request = requests.get(url, params=params)
print(request.text)
```

</TabItem>
<TabItem value="exam" label="Exam">

```python
import requests

url = "https://bpsapi.rajtech.me/list"
params = {'category': 'exam'}

request = requests.get(url, params=params)
print(request.text)
```

</TabItem>
<TabItem value="id" label="Category ID">

```python
import requests

url = "https://bpsapi.rajtech.me/list"
params = {'category': '52'} # It doesn't matter if you use a string or an int as the value

request = requests.get(url, params=params)
print(request.text)
```

</TabItem>
</Tabs>

</TabItem>



<TabItem value="curl" label="cURL">

Here is are example requests using cURL:

<Tabs>
<TabItem value="category-name" label="Category Name" default>

One of the categories from https://bpsapi.rajtech.me/categories

```bash
curl -X 'GET' \
  'https://bpsapi.rajtech.me/list?category=general' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' 
```

</TabItem>

<TabItem value="id" label="Category ID">

```bash
curl -X 'GET' \
  'https://bpsapi.rajtech.me/list?category=52' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' 
```

</TabItem>
</Tabs>

</TabItem>



<TabItem value="nodejs" label="Node.js">

Here are example requests using Node.js's `node-fetch` library:

<Tabs>
<TabItem value="category-name" label="Category Name" default>

One of the categories from https://bpsapi.rajtech.me/categories

```js
import fetch from 'node-fetch';
const url = 'https://bpsapi.rajtech.me/list';
const params = {category: 'general'};

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
<TabItem value="id" label="Category ID">

```js
import fetch from 'node-fetch';
const url = 'https://bpsapi.rajtech.me/list';
const params = {category: '52'};

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
</TabItem>



</Tabs>



## Example Responses

<Tabs>
<TabItem value="valid-category" label="Valid Category" default>

One of the categories from https://bpsapi.rajtech.me/categories

When getting circulars from the `general` category, the response is a dictionary with the following keys:

```python
{
  "status": "success",
  "http_status": 200,
  "data": [
    {
      "title": "Circular 01 - Public Holiday- Eid-Al-Fitr 2024",
      "link": "https://bpsdoha.com/circular/category/52-academic-year-2024-25?download=1618",
      "id": "1618"
    }
    ...
  ]
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