import "./MovieListItem.css";
import favouriteSelected from "./../../assets/heart-selected.png";
import favouriteUnselected from "../../assets/heart-unselected.png";
import { useNavigate } from "@solidjs/router";
import { createSignal, onMount } from "solid-js";
import { useFavouriteMovies } from "../../providers/FavouriteMoviesProvider";

function MovieListItem(props) {
  const [isFavourite, setIsFavourite] = createSignal(false);
  const [favouriteMovies, { removeFavouriteMovie, addFavouriteMovie }] =
    useFavouriteMovies();

  onMount(() => {
    favouriteMovies.map((movie) => {
      if (movie.id === props.movie.id) {
        setIsFavourite(true);
      }
    });
  });

  function toggleFavourite() {
    setIsFavourite((prev) => !prev);
    if (isFavourite()) {
      addFavouriteMovie(props.movie);
    } else {
      removeFavouriteMovie(props.movie.id);
    }
  }
  const navigate = useNavigate();

  return (
    <div class="movie">
      <div
        class="movie-link"
        onclick={() => navigate(`/movie-details/${props.movie.id}`)}
      >
        <img class="movie-img" src={props.movie?.primaryImage?.url} />
        <div class="movie-info">
          <h3 class="movie-info-text">
            {props.movie?.titleText?.text ?? "No Title Info"}
          </h3>
          <h3 class="movie-info-text">
            {props.movie?.releaseYear?.year ?? "No Year Info"}{" "}
          </h3>
          <h3 class="movie-info-text">
            {props.movie?.titleType?.text ?? "No Type Info"}{" "}
          </h3>
        </div>
      </div>
      <div class="img-container">
        <img
          class="favourite-icon"
          onclick={toggleFavourite}
          src={isFavourite() ? favouriteSelected : favouriteUnselected}
        />
      </div>
    </div>
  );
}

export default MovieListItem;
