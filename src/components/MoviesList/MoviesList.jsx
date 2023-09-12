import "./MovieList.css";
import prevArrow from "../../assets/back.png";
import nextArrow from "../../assets/next.png";
import { For, Show, createEffect, createSignal } from "solid-js";
import MovieListItem from "../MovieListItem/MovieListItem";
import { debounce } from "../../helpers/helpers";

function MoviesList(props) {
  const [btnPrevClass, setBtnPrevClass] = createSignal();
  const [btnNextClass, setBtnNextClass] = createSignal();

  createEffect(() => {
    setBtnPrevClass(props.currentPage === 1 ? "inactive-btn" : "active-btn");
    setBtnNextClass(!props.hasMorePages ? "inactive-btn" : "active-btn");
  });

  function nextMovies() {
    if (props.hasMorePages) {
      props.setCurrentPage((c) => c + 1);
    }
  }

  function previousMovies() {
    if (props.currentPage > 1) {
      props.setCurrentPage((c) => c - 1);
    }
  }

  return (
    <>
      <div id="movies-list">
        <Show when={props.movies} fallback={<h1>"LOADING...."</h1>}>
          <For each={props.movies}>
            {(movie) => <MovieListItem movie={movie} />}
          </For>
        </Show>
      </div>
      <div id="movies-pagination">
        <button
          class={`pagination-button ${btnPrevClass()}`}
          id="backBtn"
          onclick={debounce(() => previousMovies())}
        >
          <img class="pagination-arrow" src={prevArrow} />
        </button>
        <h3 id="pageNumber">{props.currentPage} Page</h3>
        <button
          class={`pagination-button ${btnNextClass()}`}
          id="nextBtn"
          onclick={debounce(() => nextMovies())}
        >
          <img class="pagination-arrow" src={nextArrow} />
        </button>
      </div>
    </>
  );
}

export default MoviesList;
