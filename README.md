# AA Daily Reflections

A daily companion for your spiritual journey, providing access to AA Daily Reflections through both a web interface and a JSON API.

## Live Site

Visit: [https://mkp715.github.io/DailyReflections/](https://mkp715.github.io/DailyReflections/)

## Features

- Interactive calendar interface for browsing reflections
- JSON API for programmatic access
- Responsive design for mobile and desktop
- Static hosting on GitHub Pages

## API Usage

### Method 1: Query Parameter (Dynamic)

Add `?format=json` to any URL to get a JSON response:

```
# Get a specific reflection
https://mkp715.github.io/DailyReflections/1-2?format=json

# List all available dates
https://mkp715.github.io/DailyReflections/?format=json
```

### Method 2: Direct JSON Files (Static)

Access individual JSON files directly:

```
# Get a specific reflection
https://mkp715.github.io/DailyReflections/api/1-2.json

# Get API index
https://mkp715.github.io/DailyReflections/api/index.json
```

## Response Format

```json
{
  "bookName": "dailyReflections",
  "month": 1,
  "date": 2,
  "title": "FIRST, THE FOUNDATION",
  "reflection": ["paragraph 1", "paragraph 2"],
  "source": {
    "bookName": "AS BILL SEES IT",
    "page": 8
  },
  "explanation": ["paragraph 1", "paragraph 2"]
}
```

## Date Format

Use `{month}-{date}` format where:
- `month`: Numeric month (1-12)
- `date`: Numeric day (1-31)

Examples:
- January 2: `1-2`
- December 25: `12-25`

## Local Development

1. Clone the repository
2. Open [index.html](index.html) in a browser
3. For JSON API testing, use the hash format: `index.html#1-2?format=json`

## Generating API Files

When you add new reflections to [index.html](index.html), regenerate the JSON files:

```bash
node generate-api-files.js
```

This will create/update individual JSON files in the [api](api) directory.

## License

See [LICENSE](LICENSE) file for details.
