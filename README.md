# usePopcorns

usePopcorns is a web application for exploring movies, searching through an extensive database, and maintaining a personalized list of watched movies. 
The app includes features like rating movies, viewing detailed information, and dynamic search functionality. 
Built with Vite/React and TypeScript.

## Features

- Search Movies: Search for movies using keywords powered by the OMDb API.
- View Movie Details: Click on any movie to view its details, including plot, director, genre, runtime, and cast.
- Rate Movies: Add your personal rating for each movie and keep track of your ratings.
- Watched List Management: Maintain a list of watched movies with runtime, IMDb rating, and your personal rating.
- Responsive Design: Fully responsive UI for a seamless experience across devices.


## Tech Stack
- Frontend: Vite/React with TypeScript for type safety and maintainability.
- Styling: CSS modules for styling the components.
- API: OMDb API for fetching movie data.
- Custom Hooks: Reusable hooks for managing state and logic, such as:
  - useMovies for fetching and managing movie data.
  - useLocalStorageState for persisting data in local storage.
  - useKey for handling keyboard shortcuts.

## Installation

### Install dependencies
***npm install***

### Set up your OMDb API key
- Create a .env file in the root directory.
- Add your OMDb API key:
  ***VITE_API_KEY=your_api_key_here

### Start the development server
***npm run dev***
- Open your browser and navigate to http://localhost:3000.
