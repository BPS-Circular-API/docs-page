---
sidebar_position: 3
---

# The `CircularChecker` Class

The `CircularChecker` class is a bit more complicated than the `API` class. It is used to check for new circulars in a category.


## Usage

The `CircularChecker` class can be imported like this:

```python
import pybpsapi
checker = pybpsapi.CircularChecker(category="general")
# or

from pybpsapi import CircularChecker
checker = CircularChecker(category="general")
```

### Parameters


- `category` - The category to check for new circulars. Can be a category name (general|ptm|exam) or a category ID.
- `url` (optional) - The BPS API URL to use. Defaults to `https://bpsapi.rajtech.me/v1`.
- `cache_method` (optional) - The method to use to cache the latest circular. Can be `None` for memory, `pickle` to use a `.pickle` file, or `database` for a local SQLITE3 Database. Defaults to `memory`.
- `debug` (optional) - Whether to enable debug mode. This enables access to the `set_cache` and `refresh cache` methods. Defaults to `False`.

### Keyword Arguments


The following keyword arguments must be passed when using the `database` cache method.
- `db_name` - The name of the database to use. 
- `db_path` - The path to the database. 
- `db_table` - The name of the table to use. 

The following keyword arguments must be passed when using the `pickle` cache method.
- `pickle_path` - The path to the pickle file.
- `pickle_name` - The name of the pickle file.



```python
# Import the module
import pybpsapi

# A minimal instance of the CircularChecker class. Stores the cache in memory.
checker = pybpsapi.CircularChecker(category="general")

# An instance of the CircularChecker class that stores the cache in a pickle file.
checker2 = pybpsapi.CircularChecker(category="general", cache_method="pickle", pickle_path=".", pickle_name="cache.pickle")

# An instance of the CircularChecker class that stores the cache in a SQLITE3 database. The database must be created before using this, but the table will be created automatically.
checker3 = pybpsapi.CircularChecker(category="general", cache_method="database", db_name="cache.db", db_path=".", db_table="cache")
```



## Methods


### 1) `check()`

This method checks for new circulars in the given category. 

```python
# Import the module
import pybpsapi

# Create an instance of the CircularChecker class
checker = pybpsapi.CircularChecker(category="general")

# Check for new circulars
new_circulars = checker.check()

print(new_circulars)
```

It returns a `list` of new circulars, or `None` if no new circulars are found. 

### 2) `get_cache()`

This method gets you the latest cached data from the set cache method. 

```python
# Import the module
import pybpsapi

# Create an instance of the CircularChecker class
checker = pybpsapi.CircularChecker(category="general")

# Get the current cache
cache = checker.get_cache()

print(cache)
```

It returns a list of the cache data, or `None` if no cache is found.


### 3) `set_cache(...)`

This method sets the cache of the CircularChecker instance. This method is only available when `debug` is set to `True`.

#### Parameters
- The `data` parameter is the actual data to set as the cache.   
- The `title` parameter is the title of the circular list. This is only used when using the `database` cache method. Defaults to `circular_list`.


```python
# Import the module
import pybpsapi

# Create an instance of the CircularChecker class
checker = pybpsapi.CircularChecker(category="general", debug=True)

# Set the cache
checker.set_cache(data={...})
```

It returns None.

### 4) `refresh_cache()`

This method refreshes the cache of the CircularChecker instance. This method is only available when `debug` is set to `True`.

```python
# Import the module
import pybpsapi

# Create an instance of the CircularChecker class
checker = pybpsapi.CircularChecker(category="general", debug=True)

# Refresh the cache
checker.refresh_cache()
```

It returns None.