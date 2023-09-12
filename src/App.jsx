import styles from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";
import { Router, Route, Routes } from "@solidjs/router";
import { FavouriteMoviesProvider } from "./providers/FavouriteMoviesProvider";
import { lazy } from "solid-js";

const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const FavouriteMoviesPage = lazy(() =>
  import("./pages/FavouriteMoviesPage/FavouriteMoviesPage")
);
const MoviesListPage = lazy(() =>
  import("./pages/MoviesListPage/MoviesListPage")
);

function App() {
  return (
    <>
      <FavouriteMoviesProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="*" component={MoviesListPage} />
            <Route path="/movie-list" component={MoviesListPage} />
            <Route path="/favourites" component={FavouriteMoviesPage} />
            <Route
              path="/movie-details/:movieId"
              component={MovieDetailsPage}
            />
          </Routes>
        </Router>
      </FavouriteMoviesProvider>
    </>
  );
}

export default App;
