# Island Fevers SVG Automated Tests

This repository contains automated end-to-end tests for the Island Fevers SVG website ([staging](https://islandfeversvg.com/staging22)) using [Playwright](https://playwright.dev/). The tests cover basic page loads, authentication, and visual verification for the main site pages.

## System Requirements

- Node.js (v16 or higher recommended)
- npm (v8 or higher)
- Git
- [Playwright](https://playwright.dev/) (installed via npm)
- A modern operating system (Linux, macOS, or Windows with WSL2)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/mnyon-grandkru/your-grenadines-automated-tests.git
   cd your-grenadines-automated-tests
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Install Playwright browsers:
   ```sh
   npx playwright install
   ```

## Usage

To run all tests:

```sh
npx playwright test
```

To view the test report after running tests:

```sh
npx playwright show-report
```

To run a specific test file:

```sh
npx playwright test tests/pages.spec.ts
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributors

- [mnyon-grandkru](https://github.com/mnyon-grandkru)
- [gktreviewer](https://github.com/gktreviewer)

Contributions are welcome! Please open an issue or submit a pull request.

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