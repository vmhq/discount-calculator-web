# Discount & Tip Calculator 🧮

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

2. Development mode
```bash
docker compose up dev
```
This will start the development server at http://localhost:5173

3. Production mode
```bash
docker compose up prod
```
This will start the production server at http://localhost:5645

#### Local Development

1. Clone the repository
```bash
git clone [your-repo-url]
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

## Contributing 🤝

Contributions are welcome! Feel free to open issues and pull requests.

## License 📄

This project is open source and available under the MIT License.