# Island Fevers SVG Automated Tests

This project contains automated tests for the Island Fevers SVG website using Playwright.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

- Run all tests:
```bash
npm test
```

- Run tests in headed mode (visible browser):
```bash
npm run test:headed
```

- Run tests in debug mode:
```bash
npm run test:debug
```

## Test Structure

The tests will:
1. Access the homepage
2. Enter the password "islandprogression"
3. Navigate through all main pages
4. Take screenshots in desktop (1920x1080), tablet (810x1080), and mobile (390x844) viewports

Screenshots will be saved in the `screenshots` directory with the format:
- `{viewport-width}-{page-name}.png`

## Test Coverage

The test suite covers the following pages:
- Homepage
- Bequia Shuttle
- Mustique Shuttle
- Our Tours
- Our Fleet
- About Us
- Contact