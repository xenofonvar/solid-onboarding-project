import "./MovieDetailsCard.css";
import { createEffect, createSignal, onMount } from "solid-js";
import { useLocation, useParams } from "@solidjs/router";
import { getMovieDetails } from "../../fetching/FetchCalls";
function MovieDetailsCard() {
  const [movieDetails, setMovieDetails] = createSignal({});
  const params = useParams();
  const location = useLocation();
  // Access the movieId parameter
  const { movieId } = params;

  onMount(() => {
    getMovieDetails("tt0000081").then((res) => {
      setMovieDetails(res.results);
    });
  });
  return (
    <div class="movie-card">
      <img id="movie-img" src={movieDetails()?.primaryImage?.url} />
      <div id="movie-info">
        <h4 class="movie-title info">{movieDetails()?.titleText?.text}</h4>
        <h4 class="movie-releaseYear info">
          {movieDetails()?.releaseYear?.year}
        </h4>
        <h4 class="movie-titleType info">{movieDetails()?.titleType?.text}</h4>
        <h4 class="movie-releaseDate info">{movieDetails()?.releaseDate}</h4>
        <h4 class="movie-description info">
          A film – also called a movie, motion picture, moving picture, picture,
          photoplay or (slang) flick – is a work of visual art that simulates
          experiences and otherwise communicates ideas, stories, perceptions,
          feelings, beauty, or atmosphere through the use of moving images.
          These images are generally accompanied by sound and, more rarely,
          other sensory stimulations.[1] The word "cinema", short for
          cinematography, is often used to refer to filmmaking and the film
          industry, and the art form that is the result of it.
        </h4>
      </div>
    </div>
  );
}

export default MovieDetailsCard;
