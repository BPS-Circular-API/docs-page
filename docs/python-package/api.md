---
sidebar_position: 2
---

# The `API` Class

The `API` class is the main class of the package. It is used to interact with any of the API's five endpoints.

## Usage

To begin using the `API` class, you need to import it from the package:

```python
import bpsapi

api = bpsapi.API()
```

That's it! You can now use the `api` object to interact with the API.

### Parameters

The `API` class takes only one parameter, `url`. This parameter is the URL of the BPS Circular API instance you want to interact with. It is set to `https://bpsapi.rajtech.me` by default.


```python
api = bpsapi.API(url="https://bpsapi.rajtech.me/v1/")
```

## Methods

The `API` class has four methods, one for each endpoint. These methods are:

- `latest()`
- `list()`
- `search()`
- `getpng()`


### 1) `latest(...)`

The `latest()` method is used to get the latest circular in a category. 

#### Parameters

- `category`: string | int. The category id or the there main category names of the circular you want to get. Can be one of 'general', 'ptm', 'exam' or an integer category ID. [Mandatory]

```python
# Get the latest circular in the General category
latest_general = api.latest(category="general")

# Get the latest circular in the category with ID 41
latest_category_41 = api.latest(category=41)
```

The `latest()` method returns a `dict` or `None` if no circular is found within the category. It may raise a `ValueError` if the category is invalid, or `ConnectionError` if the API is down/can't be reached. 


### 2) `list(...)`

The `list()` method is used to get a list of all circulars in a category. 

#### Parameters

- `category`: string | int. The category id or the there main category names of the circular you want to get. Can be one of 'general', 'ptm', 'exam' or an integer category ID. [Mandatory]
- `amount`: int. The page number of the circulars list you want to get. Defaults to -1 or infinite [Optional]

```python
# Get a list of all circulars in the General category
general_list = api.list(category="general")

# Get a list of all circulars in the PTM category
ptm_list = api.list(category="ptm")

# Get a list of all circulars in the category with ID 41
category_41_list = api.list(category=41)
```

The `list()` method returns a `dict` or `None` if no circular is found within the category. It may raise a `ValueError` if the category is invalid, or `ConnectionError` if the API is down/can't be reached.

### 3) `search(...)`

The `search()` method is used to search for a circular by its ID or keywords.

#### Parameters

- `query`: string | int. The ID or keywords of the circular you want to search for. [Mandatory]

```python
# Search for a circular with ID 1108
circular_1108 = api.search(query=1108)

# Search for a circular with keywords "mobile"
mobile_circular = api.search(query="mobile")
```

The `search()` method returns a `dict` or `None` if no circular is found. It may raise a `ValueError` if the query is invalid, or `ConnectionError` if the API is down/can't be reached.

### 4) `getpng(...)`

The `getpng()` method is used to get the preview image of a circular in the form of a list of direct URLs pointing to the image.

#### Parameters

- `url`: string. The direct URL to the PDF of the circular you want to get the preview image of. [Mandatory]

```python
# Get the preview image of circular with ID 1147
circular_1147_png = api.getpng(url='https://bpsdoha.com/circular/category/38-circular-ay-2022-23?download=1147')
```

The `getpng()` method returns a `list` or `None` if no image is found. It may raise a `ValueError` if the URL is invalid, or `ConnectionError` if the API is down/can't be reached.


