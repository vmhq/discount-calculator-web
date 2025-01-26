# Discount & Tip Calculator 🧮

## Repository Structure 📂

```
├── src/                    # Source code
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   ├── index.css          # Global styles
│   └── vite-env.d.ts      # TypeScript environment declarations
├── public/                # Static assets
│   └── calculator.svg     # Calculator icon
├── dist/                  # Production build output
├── docker-compose.yml     # Docker Compose configuration
├── Dockerfile             # Docker container configuration
├── package.json           # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── vite.config.ts        # Vite build configuration
```

A modern, user-friendly web application for calculating discounts and tips with a beautiful dark/light mode interface.

## Features ✨

### Discount Calculator 💰
- Calculate final prices after applying percentage discounts
- Instantly see how much you save
- Support for USD and CLP currencies

### Tip Calculator 💸
- Calculate tips with an intuitive slider (0-30%)
- Split bills between multiple people
- See per-person amount instantly

### Additional Features 🌟
- Dark/Light mode with system preference detection
- Responsive design for all devices
- Clean and modern UI
- Currency switching between USD and CLP

## Technologies Used 🛠️

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons
- Docker
- Docker Compose

## Getting Started 🚀

### Prerequisites

- Node.js (Latest LTS version recommended) - *Only needed for local development*
- npm or yarn - *Only needed for local development*
- Docker and Docker Compose - *For containerized deployment*

### Installation

#### Using Docker (Recommended)

1. Clone the repository
```bash
git clone https://github.com/vmhq/discount-calculator-web.git
cd discount-calculator-web
```
2. Build
```bash
docker compose up -d --build
```
This will start the server at http://localhost:6545

#### Local Development

1. Clone the repository
```bash
git clone https://github.com/vmhq/discount-calculator-web.git
cd discount-calculator-web
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Usage 📱

1. Choose between Discount or Tip calculator using the tabs
2. Select your preferred currency (USD/CLP)
3. For Discounts:
   - Enter the original amount
   - Input the discount percentage
   - See the final price and savings
4. For Tips:
   - Enter the bill amount
   - Adjust tip percentage using the slider
   - Enter number of people to split the bill
   - View tip amount, total, and per-person cost

## License 📄

This project is open source and available under the MIT License.