---
sidebar_position: 3
---

# The `CircularChecker` Class

The `CircularChecker` class monitors a specific category for new circulars using the BPS Circular API and stores the latest state using a customizable cache method.

---

## Usage

```python
from pybpsapi import CircularChecker

checker = CircularChecker(category="general")
```

---

## Parameters

- `category`: (str | int) — Required. The category to monitor for circulars. Can be a category name or a numeric ID.
- `api_url`: (str) — Optional. Defaults to `"https://bpsapi.rajtech.me/"`.
- `fallback_api_url`: (str) — Optional. Used as a backup if the primary API fails.
- `cache_method`: (str) — One of `'pickle'`, `'sqlite'`, `'mysql'`. Determines how the last seen circular ID is cached.
- `**kwargs`: Additional keyword arguments depending on the cache method (see below).

---

## Cache Method Specific Arguments

### For `'pickle'`:

- `cache_file`: (str) — Path to the pickle file used for caching.

### For `'sqlite'`:

- `db_path`: (str) — Path to the directory where the `.db` file is stored.
- `db_name`: (str) — Name of the database file (without extension).
- `db_table`: (str) — Table name where cache is stored.

### For `'mysql'`:

- `db_name`: (str) — Name of the MySQL database.
- `db_user`: (str) — Username.
- `db_host`: (str) — Host address.
- `db_port`: (int) — Port number.
- `db_password`: (str) — Password.
- `db_table`: (str) — Table name to store cached values.

---

## Examples

```python
# Pickle cache
checker = CircularChecker(category="general", cache_method="pickle", cache_file="cache.pickle")

# SQLite cache
checker = CircularChecker(category="general", cache_method="sqlite", db_path=".", db_name="cache", db_table="circulars")

# MySQL cache
checker = CircularChecker(
    category="general", cache_method="mysql",
    db_name="bps", db_user="root", db_host="localhost",
    db_port=3306, db_password="secret", db_table="circulars"
)
```

---

## Methods

### `check()`

Checks for new circulars since the last known one.

```python
new_circulars = checker.check()
```

Returns a list of new circular dictionaries or an empty list if none are found. Filters out circulars from other categories if a category is set.

---

### `get_cache()`

Retrieves the last cached circular ID.

```python
last_id = checker.get_cache()
```

Returns the cached circular ID as an integer, or `None`.

---

## Internal Method

> These are not part of the public API but useful to know for contributors.

### `_set_cache(circular_id)`

Sets the cached circular ID to a new value.

```python
checker._set_cache(12345)
```

---

## CircularCheckerGroup

A helper class to manage multiple `CircularChecker` instances.

### Usage

```python
group = CircularCheckerGroup(checker1, checker2)
results = group.check()
```