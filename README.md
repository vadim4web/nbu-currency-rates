# NBU Currency Rates

SPA application for displaying exchange rates from the National Bank of Ukraine (NBU). Built using Vue 3 with Vite, this project supports local editing and searching of exchange rates, pagination, and theme adaptation based on the user's color scheme preference.

---

## Project Structure

```bash
nbu-currency-rates/
├── dist/               # Build output directory
├── node_modules/       # Dependencies
├── public/             # Static assets
│   └── favicon.png     # App favicon
├── src/                # Source code
│   ├── assets/         # Static assets (images, etc.)
│   ├── components/     # Reusable components
│   │   ├── CurrenciesListComponent.vue
│   │   ├── FooterComponent.vue
│   │   ├── HeaderComponent.vue
│   │   └── PaginatorComponent.vue
│   ├── router/         # Vue Router configuration
│   ├── utils/          # Utility functions
│   │   ├── api.js
│   │   ├── date2edit.js
│   │   ├── date2show.js
│   │   ├── date4api.js
│   │   └── date4input.js
│   ├── views/          # Pages (views)
│   │   ├── EditedView.vue
│   │   ├── EditView.vue
│   │   ├── HomeView.vue
│   │   ├── NotFoundView.vue
│   │   └── SearchView.vue
│   ├── App.vue         # Root Vue component
│   ├── main.js         # Entry point for the app
│   └── style.css       # Global styles
├── .prettierrc         # Prettier configuration
├── eslint.config.js    # ESLint configuration
├── index.html          # Main HTML file
├── package.json        # Project metadata and dependencies
├── README.md           # Project documentation (this file)
└── vite.config.js      # Vite configuration  
```

---

## Features

- **Display Exchange Rates**: View exchange rates for the current day fetched from the NBU API.
- **Local Editing**: Edit currency rates and save changes locally.
- **Pagination**: Navigate through the list of currencies, 10 items per page.
- **Date Search**: Retrieve and display exchange rates for a specific date.
- **Modified Rates**: View a list of currencies with locally modified rates.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Light/Dark Mode**: Adapts to the user's system preferences for color schemes.

---

## Pages

### 1. Home
Displays a paginated list of exchange rates for the current day.

### 2. Search
Allows users to search for exchange rates by selecting a specific date.

### 3. Edit
Edit and save a specific currency's rate locally. 

### 4. Modified Rates
Lists all currencies with locally modified rates.

### 5. Not Found
Fallback page for undefined routes.

---

## Setup

### Prerequisites
- Node.js (v16 or higher recommended)

### Installation

```bash
git clone https://github.com/vadim4web/nbu-currency-rates.git
cd nbu-currency-rates
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to view the app in development mode.

### Build

```bash
npm run build
```

The production-ready files will be available in the `dist/` folder.

---

## API Integration

**NBU API Documentation**: [https://bank.gov.ua/ua/open-data/api-dev](https://bank.gov.ua/ua/open-data/api-dev)

Example Request:
```bash
https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=YYYYMMDD&json
```

---

## License

This project is licensed under the MIT License.
