import { createContext, createSignal, useContext } from "solid-js";
import { createStore } from "solid-js/store";

const FavouriteMoviesContext = createContext();

export function FavouriteMoviesProvider(props) {
  const [favouriteMovies, setFavouriteMovies] = createStore([]),
    counter = [
      favouriteMovies,
      {
        removeFavouriteMovie(id) {
          setFavouriteMovies(favouriteMovies.filter((movie) => movie.id != id));
        },
        addFavouriteMovie(movie) {
          setFavouriteMovies([...favouriteMovies, movie]);
        },
      },
    ];

  return (
    <FavouriteMoviesContext.Provider value={counter}>
      {props.children}
    </FavouriteMoviesContext.Provider>
  );
}

export function useFavouriteMovies() {
  return useContext(FavouriteMoviesContext);
}
