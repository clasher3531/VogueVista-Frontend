# VogueVista E-commerce Frontend

VogueVista is a modern, responsive e-commerce web application built with ReactJS and bundled using Webpack 5. It offers a seamless shopping experience for users, featuring a stylish interface, fast performance, and a robust checkout process.

## Features

- 🛒 Modern e-commerce UI/UX
- 🔍 Product discovery, categories, and search
- 🛍️ Shopping cart and mini-cart
- 💳 Secure checkout and order confirmation
- 📱 Responsive design for desktop and mobile
- ⚡ Fast loading with code splitting and optimized assets
- 🛠️ Built and bundled with Webpack 5

## Tech Stack

- **Frontend:** React 18, React Router
- **Build Tool:** Webpack 5
- **Styling:** CSS, Bootstrap 5
- **State Management:** React Context API

## Getting Started

### Prerequisites

- Node.js v20.15.1 or higher
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd VogueVista-Frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Development

Start the development server (Webpack Dev Server):

```sh
npm run start
```

Open [http://localhost:3000](http://localhost:3000) (or your chosen port) to view the app in your browser. The page reloads automatically on code changes.

### Production Build

Create an optimized production build:

```sh
npm run build
```

The build output will be in the `dist` folder, ready for deployment.

## Project Structure

- `src/` — React components, styles, and app logic
- `public/` — Static assets and HTML template
- `webpack.config.js` — Webpack 5 configuration
- `package.json` — Project scripts and dependencies

## Webpack 5 Build Process

- Uses `webpack-dev-server` for local development with hot reloading
- Bundles JS, CSS, and image assets
- Minifies and hashes files for production
- Handles environment variables and custom port configuration

## Customization

- Change the port by setting the `PORT` environment variable:
  - On Windows (cmd): `set PORT=4000 && npm run start`
  - On macOS/Linux: `PORT=4000 npm run start`
- Update branding, colors, and assets in the `public/` and `src/` folders

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the internet source License.
