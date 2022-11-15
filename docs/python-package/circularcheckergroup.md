---
sidebar_position: 4
---

# The `CircularCheckerGroup` Class

The `CircularCheckerGroup` class is a really simple class which aims to let you 
check for new circulars in multiple categories at once. It is a subclass of the 
`CircularChecker` class, and inherits all of its methods and attributes.

## Usage

The `CircularCheckerGroup` class can be imported like this:

```python
import pybpsapi
checker = pybpsapi.CircularCheckerGroup()

# or

from pybpsapi import CircularCheckerGroup
checker = CircularCheckerGroup()
```

### Parameters

The `CircularCheckerGroup` class takes the following parameters:

- `*args` (optional): A list of `CircularChecker` objects. These objects will be 
added to the group while creation. [Optional]

### Keyword Arguments

- `debug` (optional): A boolean value. If set to `True`, the `self._checkers` variable will be public, being accessible with `self.checkers`


## Methods

The `CircularCheckerGroup` class has only five methods:

### 1) `add(...)`

The `add()` method is used to add a `CircularChecker` object to the group.


#### Parameters

- `checker`: A `CircularChecker` object. The object to be added to the group.
- `*args` (optional): Multiple `CircularChecker` objects. These objects will be added to the group.


```python
# Import the package
import pybpsapi

# Create a CircularChecker object
checker = pybpsapi.CircularChecker(category="general")
checker2 = pybpsapi.CircularChecker(category="ptm")

# Create a CircularCheckerGroup object
group = pybpsapi.CircularCheckerGroup()

# Add the checker to the group
group.add(checker, checker2)
```

### 2) `create(...)`

The `create()` method is used to create a `CircularChecker` object and add it to the group.

#### Parameters

- `category`: string | int. The category id or the there main category names of the circular you want to get. Can be one of 'general', 'ptm', 'exam' or an integer category ID. [Mandatory]
- `url` (optional): string. The URL of the BPS Circular API instance you want to interact with. It is set to `https://bpsapi.rajtech.me` by default. [Optional]
- `cache_method` (optional): string. The method to be used for caching. Can be one of 'pickle' or 'database'. Defaults to 'None' (Memory). [Optional]
- `debug` (optional): bool. Whether to enable debug mode or not. Defaults to False. [Optional]
- `**kwargs` (optional): Keyword arguments to be passed to the `CircularChecker` object.


```python
# Import the package
import pybpsapi

# Create a CircularCheckerGroup object
group = pybpsapi.CircularCheckerGroup(debug=True)

# Create a CircularChecker object and add it to the group
group.create(category="general", cache_method="pickle", pickle_path=".", pickle_name="cache")

print(len(group.checkers)) # 1, since we added one checker to the group using the create() method
```


### 3) `refresh_cache()`

The `refresh_cache()` method is used to refresh the cache of all the `CircularChecker` objects in the group.

This method does not take any parameters.

```python
# Import the package
import pybpsapi

# Create a CircularChecker object
checker = pybpsapi.CircularChecker(category="general")

# Create a CircularCheckerGroup object
group = pybpsapi.CircularCheckerGroup()

# Add the checker to the group
group.add(checker)

# Refresh the cache
group.refresh_cache()
```

### 4) `check()`

The `check()` method is used to check for new circulars in all the `CircularChecker` objects in the group.

It returns a `dict` with the category ID/name as the key and the new-circular list as the value.

```python
# Import the package
import pybpsapi

# Create a CircularChecker object
checker = pybpsapi.CircularChecker(category="general")
checker2 = pybpsapi.CircularChecker(category="ptm")

# Create a CircularCheckerGroup object
group = pybpsapi.CircularCheckerGroup()

# Add the checker to the group
group.add(checker, checker2)

# Check for new circulars
new_circulars = group.check() # {'general': [], 'ptm': []}
```