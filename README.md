# Island Fevers SVG Automated Tests

This repository contains automated end-to-end tests for the Island Fevers SVG website, covering both the staging and production environments using [Playwright](https://playwright.dev/). The tests ensure basic page loads, authentication, and visual verification for the main site pages.

## Project Structure

- **Staging Tests**: Located in `islandfeversvg.com/staging`, these tests target the staging environment at [https://islandfeversvg.com/staging22](https://islandfeversvg.com/staging22).
- **Production Tests**: Located in `islandfeversvg.com/prod`, these tests target the production environment at [https://islandfeversvg.com](https://islandfeversvg.com).

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
2. Install dependencies for staging:
   ```sh
   cd islandfeversvg.com/staging
   npm install
   npx playwright install
   ```
3. Install dependencies for production:
   ```sh
   cd ../prod
   npm install
   npx playwright install
   ```

## Usage

### Staging Tests

To run all staging tests:

```sh
cd islandfeversvg.com/staging
npx playwright test
```

To view the test report after running tests:

```sh
npx playwright show-report
```

### Production Tests

To run all production tests:

```sh
cd islandfeversvg.com/prod
npx playwright test
```

To view the test report after running tests:

```sh
npx playwright show-report
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributors

- [mnyon-grandkru](https://github.com/mnyon-grandkru)
- [gktreviewer](https://github.com/gktreviewer)

Contributions are welcome! Please open an issue or submit a pull request.