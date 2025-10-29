# AA Daily Reflections

A daily companion for your spiritual journey, providing access to AA Daily Reflections through both a web interface and a JSON API - all from a single HTML file!

## Live Site

Visit: [https://mkp715.github.io/DailyReflections/](https://mkp715.github.io/DailyReflections/)

## Features

- Interactive calendar interface for browsing reflections
- JSON API for programmatic access - **no separate JSON files needed!**
- All 365 reflections served dynamically from a single HTML file
- Responsive design for mobile and desktop
- Static hosting on GitHub Pages

## JSON API Usage

Simply add `?format=json` to any URL to get a JSON response:

```bash
# Get a specific reflection (January 2)
https://mkp715.github.io/DailyReflections/#1-2?format=json

# Get a specific reflection (December 25)
https://mkp715.github.io/DailyReflections/#12-25?format=json

# List all available reflections
https://mkp715.github.io/DailyReflections/?format=json
```

## How It Works

The site uses hash-based routing (`#month-date`) to navigate between reflections. When you add `?format=json`, the page dynamically returns JSON instead of rendering HTML. This means:

- **No server-side processing required**
- **No database needed**
- **No separate API files to maintain**
- Works perfectly on GitHub Pages static hosting

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

Use `#month-date` format where:
- `month`: Numeric month (1-12)
- `date`: Numeric day (1-31)

Examples:
- January 2: `#1-2`
- December 25: `#12-25`

## Local Development

1. Clone the repository
2. Open [index.html](index.html) in a browser
3. Navigate normally or test the JSON API:
   - HTML view: `file:///path/to/index.html#1-2`
   - JSON view: `file:///path/to/index.html#1-2?format=json`

## License

See [LICENSE](LICENSE) file for details.
