import logo from "./logo.svg";
import styles from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";
import { Router, Route, Routes } from "@solidjs/router";
import FavouriteMoviesPage from "./pages/FavouriteMoviesPage/FavouriteMoviesPage";
import MoviesListPage from "./pages/MoviesListPage/MoviesListPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import { FavouriteMoviesProvider } from "./providers/FavouriteMoviesProvider";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <FavouriteMoviesProvider>
          <Route path="/movie-list" component={<MoviesListPage />} />
          <Route path="/favourites" component={<FavouriteMoviesPage />} />
          <Route
            path="/movie-details/:movieId"
            component={<MovieDetailsPage />}
          />
        </FavouriteMoviesProvider>
      </Routes>
    </Router>
  );
}

export default App;
