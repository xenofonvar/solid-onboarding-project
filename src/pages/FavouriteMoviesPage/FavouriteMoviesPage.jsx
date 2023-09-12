import "./FavouriteMoviePage.css";
import MovieListItem from "../../components/MovieListItem/MovieListItem";
import { debounce } from "../../helpers/helpers";
import { useFavouriteMovies } from "../../providers/FavouriteMoviesProvider";
import prevArrow from "./../../assets/back.png";
import nextArrow from "../../assets/next.png";
import { createEffect, createSignal } from "solid-js";

function FavouriteMoviesPage() {
  const [favouriteMovies] = useFavouriteMovies();
  const [currentPage, setCurrentPage] = createSignal(1);
  const [btnPrevClass, setBtnPrevClass] = createSignal();
  const [btnNextClass, setBtnNextClass] = createSignal();
  const [paginatedMovies, setPaginatedMovies] = createSignal([]);
  const itemsPerPage = 10;
  const numPages = Math.ceil(favouriteMovies.length / itemsPerPage);

  createEffect(() => {
    const start = (currentPage() - 1) * itemsPerPage;
    const end = currentPage() * itemsPerPage;
    setPaginatedMovies(favouriteMovies.slice(start, end));
  });

  createEffect(() => {
    setBtnPrevClass(currentPage() === 1 ? "inactive-btn" : "active-btn");
    setBtnNextClass(currentPage() < numPages ? "active-btn" : "inactive-btn");
  });

  function previousMovies() {
    if (currentPage() - 1 > 0) {
      setCurrentPage(currentPage() - 1);
    }
  }

  function nextMovies() {
    if (currentPage() + 1 <= numPages) setCurrentPage(currentPage() + 1);
  }
  return (
    <main class="page-container">
      <Show
        when={favouriteMovies.length > 0}
        fallback={
          <div>
            <h3>There are no favourite movies</h3>
          </div>
        }
      >
        <div class="favourite-grid">
          <For each={paginatedMovies()}>
            {(movie) => (
              <div class="favourite-grid-item">
                <MovieListItem movie={movie} />
              </div>
            )}
          </For>
        </div>

        <Show when={favouriteMovies.length > 9} fallback={<></>}>
          <div id="movies-pagination">
            <button
              class={`pagination-button ${btnPrevClass()}`}
              id="backBtn"
              onclick={debounce(() => previousMovies())}
            >
              <img class="pagination-arrow" src={prevArrow} />
            </button>
            <h3 id="pageNumber">{currentPage()} Page</h3>
            <button
              class={`pagination-button ${btnNextClass()}`}
              id="nextBtn"
              onclick={debounce(() => nextMovies())}
            >
              <img class="pagination-arrow" src={nextArrow} />
            </button>
          </div>
        </Show>
      </Show>
    </main>
  );
}

export default FavouriteMoviesPage;
