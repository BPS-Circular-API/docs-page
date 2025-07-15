---
sidebar_position: 4
---

# The `CircularCheckerGroup` Class

The `CircularCheckerGroup` class helps manage multiple `CircularChecker` instances to monitor and retrieve circulars across categories simultaneously.

---

## Usage

```python
from pybpsapi import CircularCheckerGroup

group = CircularCheckerGroup()
```

---

## Parameters

- `*circular_checkers`: Zero or more `CircularChecker` objects to initialize the group with.

---

## Methods

### `add(checker, *more_checkers)`

Adds one or more `CircularChecker` instances to the group.

```python
group.add(checker1, checker2)
```

---

### `create(category, url="https://bpsapi.rajtech.me/", cache_method=None, **kwargs)`

Instantiates a new `CircularChecker`, adds it to the group.

```python
group.create(
    category="general",
    cache_method="pickle",
    cache_file="gen_cache.pickle"
)
```

---

### `check()`

Checks for new circulars in all `CircularChecker` instances in the group.

Returns a `dict` mapping each category to a list of new circulars:

```python
new_circulars = group.check()
# Example output: {'general': [...], 'exam': [...]}
```

---

## Example

```python
from pybpsapi import CircularChecker, CircularCheckerGroup

# Create individual checkers
checker1 = CircularChecker(category="general", cache_method="pickle", cache_file="cache1.pickle")
checker2 = CircularChecker(category="exam", cache_method="pickle", cache_file="cache2.pickle")

# Add to group
group = CircularCheckerGroup(checker1, checker2)

# Fetch new circulars from all
results = group.check()
```