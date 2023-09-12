import { children, createContext, createSignal, useContext } from "solid-js";
import { createStore } from "solid-js/store";

const FavouriteMoviesContext = createContext();

export function FavouriteMoviesProvider(props) {
  const c = children(() => props.children);

  const [favouriteMovies, setFavouriteMovies] = createSignal([]),
    counter = [
      favouriteMovies,
      {
        removeFavouriteMovie(id) {
          setFavouriteMovies(
            favouriteMovies().filter((movie) => movie.id != id)
          );
        },
        addFavouriteMovie(movie) {
          setFavouriteMovies([...prev, movie]);
        },
      },
    ];

  // function addFavouriteMovie(movie) {
  //   setFavouriteMovies([...prev, movie]);
  // }

  // function removeFavouriteMovie(id) {
  //   setFavouriteMovies(favouriteMovies().filter((movie) => movie.id != id));
  // }
  // const movieHandler = [
  //   favouriteMovies,
  //   {
  //     addFavouriteMovie,
  //     removeFavouriteMovie,
  //   },
  // ];

  return (
    <FavouriteMoviesContext.Provider value={counter}>
      {props.children}
    </FavouriteMoviesContext.Provider>
  );
}

export function useFavouriteMovies() {
  return useContext(FavouriteMoviesContext);
}
