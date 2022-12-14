---
sidebar_position: 5
---


# Using /cached-latest Endpoint

In this tutorial, we will be using the /cached-latest endpoint to get a cached list of all circulars in a single category.

But, This endpoint caches the latest circular for an hour, and returns the cached circulars if the cache is still valid. 

This endpoint should be used when making an app that needs to get the latest circulars in one Category but does not need minute level precision.

:::warning Warning!

Don't use this endpoint if you're making an app that needs minute level precision. Use `/latest` instead!

:::

#### Parameters:
- `category` : `string`. Can have values (`general`, `ptm`, `exam`) [Mandatory]

The `category` parameter refers to one of the 3 main category of circulars on the BPS Website.


## Example Requests

<Tabs>



<TabItem value="python" label="Python" default>

Here are example requests using Python's `requests` library:

<Tabs>
<TabItem value="general" label="General" default>

```python
import requests

url = "https://bpsapi.rajtech.me/v1/cached-latest"
params = {'category': 'general'}

request = requests.get(url, params=params)
print(request.text)
```

</TabItem>
<TabItem value="ptm" label="PTM">

```python
import requests

url = "https://bpsapi.rajtech.me/v1/cached-latest"
params = {'category': 'ptm'}

request = requests.get(url, params=params)
print(request.text)
```

</TabItem>
<TabItem value="exam" label="Exam">

```python
import requests

url = "https://bpsapi.rajtech.me/v1/cached-latest"
params = {'category': 'exam'}

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
  'https://bpsapi.rajtech.me/v1/cached-latest?category=general' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' 
```

</TabItem>
<TabItem value="ptm" label="PTM">

```bash
curl -X 'GET' \
  'https://bpsapi.rajtech.me/v1/cached-latest?category=ptm' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' 
```

</TabItem>
<TabItem value="exam" label="Exam">

```bash
curl -X 'GET' \
  'https://bpsapi.rajtech.me/v1/cached-latest?category=exam' \
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
const url = 'https://bpsapi.rajtech.me/v1/cached-latest';
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
const url = 'https://bpsapi.rajtech.me/v1/cached-latest';
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
const url = 'https://bpsapi.rajtech.me/v1/cached-latest';
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
    "link": "https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1147"
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
    "link": "https://bpsdoha.com/circular/category/40-circular-ptm-2022-23?download=1126"
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
    "link": "https://bpsdoha.com/circular/category/35-exam-time-table-and-syllabus-2022-23?download=1146"
  }
}
```


</TabItem>
</Tabs>


---

Thanks for reading!

import Tabs			from "@theme/Tabs";
import TabItem		from "@theme/TabItem";