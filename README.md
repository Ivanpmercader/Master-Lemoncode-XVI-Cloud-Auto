# Cloud Lab - Auto + React Lab

React Lab is a web application built with React and Vite. It utilizes Material UI for the UI components and includes features such as routing and state management.

## Changes compared to the master/frameworks/react-lab application 
- add API_ORGANIZATION environment variable
- use hashRoute 
- use not official gh-pages library
- Auto deploy in githubpages

## Features
- Built with **React** and **Vite** for fast development and performance.
- Uses **Material UI** for styling and UI components.
- Implements **React Router** for navigation.
- Includes **use-debounce** for optimized state updates.
- Fetches organization members from the **GitHub API**.
- Displays **Rick and Morty characters** with a search feature.

## Application Overview
React Lab consists of two main parts:
1. **GitHub Organization Members:** Loads and displays the members of a given organization using the GitHub API.
2. **Rick and Morty Characters:** Fetches characters from the Rick and Morty API, allowing users to search among them.

## Installation

To set up the project, follow these steps:

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd react-lab
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Run the development server:
   ```sh
   npm run start
   ```

4. Open the application in your browser:
   ```
   http://localhost:5173
   ```

## Building for Production
To create a production build, run:
```sh
npm run build
```
This will generate the optimized files in the `dist/` directory.

## Environment Variables
The project supports different environments. You can configure them using the `.env` files:
- `.env.development` for development settings
- `.env.production` for production settings
