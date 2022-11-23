---
sidebar_position: 2
---


# Using /latest Endpoint

In this tutorial, we will be using the `/latest` endpoint to get the latest circular in a category.

This endpoint returns a JSON object containing the latest circular's information.

:::tip Tip!

Use the `/cached-latest` endpoint if you're making an app that does not require minute level precision. It gives faster responses and reduces server load :D

:::

#### Parameters:
* `category` : `string`. Needs to be either (`general`, `ptm`, `exam`) or a BPS Category ID (int) [Mandatory]

The `category` parameter refers to any one of the categories of circulars on the BPS Website. 

The category ID can be found in the URL of the circulars page of the BPS Website, like here `https://www.bpsdoha.net/circular/category/41-sample-question-papers`, 41 is the ID

Or if you want the to use one of the three main categories, you can use `general`, `ptm` or `exam` as the value of the `category` parameter, instead of a numeric ID

## Example Requests



<Tabs>



<TabItem value="python" label="Python" default>

Here are example requests using Python's `requests` library:

<Tabs>
<TabItem value="general" label="General" default>

```python
import requests

url = "https://bpsapi.rajtech.me/v1/latest"
params = {'category': 'general'}

request = requests.get(url, params=params)
print(request.text)
```

</TabItem>
<TabItem value="ptm" label="PTM">

```python
import requests

url = "https://bpsapi.rajtech.me/v1/latest"
params = {'category': 'ptm'}

request = requests.get(url, params=params)
print(request.text)
```

</TabItem>
<TabItem value="exam" label="Exam">

```python
import requests

url = "https://bpsapi.rajtech.me/v1/latest"
params = {'category': 'exam'}

request = requests.get(url, params=params)
print(request.text)
```

</TabItem>
<TabItem value="id" label="Category ID">

```python
import requests

url = "https://bpsapi.rajtech.me/v1/latest"
params = {'category': '41'} # It doesn't matter if you use a string or an int as the value

request = requests.get(url, params=params)
print(request.text)
```

</TabItem>
</Tabs>

</TabItem>



<TabItem value="curl" label="cURL">

Here is are example requests using cURL:

<Tabs>
<TabItem value="general" label="General" default>

```bash
curl -X 'GET' \
  'https://bpsapi.rajtech.me/v1/latest?category=general' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' 
```

</TabItem>
<TabItem value="ptm" label="PTM">

```bash
curl -X 'GET' \
  'https://bpsapi.rajtech.me/v1/latest?category=ptm' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' 
```

</TabItem>
<TabItem value="exam" label="Exam">

```bash
curl -X 'GET' \
  'https://bpsapi.rajtech.me/v1/latest?category=exam' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' 
```

</TabItem>
<TabItem value="id" label="Category ID">

```bash
curl -X 'GET' \
  'https://bpsapi.rajtech.me/v1/latest?category=41' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' 
```

</TabItem>
</Tabs>

</TabItem>



<TabItem value="nodejs" label="Node.js">

Here are example requests using Node.js's `node-fetch` library:

<Tabs>
<TabItem value="general" label="General" default>

```js
import fetch from 'node-fetch';
const url = 'https://bpsapi.rajtech.me/v1/latest';
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
<TabItem value="ptm" label="PTM">

```js
import fetch from 'node-fetch';
const url = 'https://bpsapi.rajtech.me/v1/latest';
const params = {category: 'ptm'};

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
<TabItem value="exam" label="Exam">

```js
import fetch from 'node-fetch';
const url = 'https://bpsapi.rajtech.me/v1/latest';
const params = {category: 'exam'};

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
const url = 'https://bpsapi.rajtech.me/v1/latest';
const params = {category: '41'};

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



## Example Response

<Tabs>
<TabItem value="general" label="General" default>

When getting circulars from the `general` category, the response is a dictionary with the following keys:

```python
{
  "status": "success",
  "http_status": 200,
  "data": {
    "title": "International French Spell Bee",
    "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1147",
    "id": 1147,
  }
}
```

</TabItem>
<TabItem value="ptm" label="PTM">

When getting circulars from the `ptm` category, the response is a dictionary with the following keys:

```python
{
  "status": "success",
  "http_status": 200,
  "data": {
    "title": "1st Parent Teacher Meeting (PTM) for Grade XI",
    "link": "https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1126",
    "id": "1126"
  }
}
```


</TabItem>
<TabItem value="exam" label="Exam">

When getting circulars from the `exam` category, the response is a dictionary with the following keys:

```python
{
  "status": "success",
  "http_status": 200,
  "data": {
    "title": "TIME TABLE - PRE BOARD -  1(X & XII) &  HALF YEARLY EXAM (XI) - OCTOBER 2022",
    "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1146",
    "id": "1146"
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
  "message": "There are no circulars in this category."
}
```


</TabItem>
<TabItem value="error" label="Error">

Here's what you get when you try to get the data from an empty category.

```python
{
  "status": "error",
  "http_status": 500,
  "error": "Error Here"
}
```


</TabItem>
</Tabs>


---

Thanks for reading!

import Tabs			from "@theme/Tabs";
import TabItem		from "@theme/TabItem";