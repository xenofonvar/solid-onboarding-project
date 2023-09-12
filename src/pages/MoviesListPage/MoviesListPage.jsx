import { Show, createEffect, createSignal } from "solid-js";
import MoviesList from "../../components/MoviesList/MoviesList";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./MoviesListPage.css";
import { getMovies, getSearchedMovies } from "../../fetching/FetchCalls";
import { createStore } from "solid-js/store";
import { useFavouriteMovies } from "../../providers/FavouriteMoviesProvider";

function MoviesListPage() {
  const [searchInput, setSearchInput] = createSignal("");
  const [currentPage, setCurrentPage] = createSignal(1);
  const [movies, setMovies] = createStore([]);
  const [hasMorePages, setHasMorePages] = createSignal();
  const counter = useFavouriteMovies();
  console.log(counter);
  createEffect(() => {
    if (searchInput() === "") {
      getMovies(currentPage()).then((data) => {
        console.log("Data", data);
        const nextPage = data.next;
        setHasMorePages(
          !nextPage.substr(nextPage.indexOf("=") + 1).match(/[a-zA-Z]/g)
        );
        setMovies(data.results);
      });
    } else {
      getSearchedMovies(searchInput(), currentPage()).then((data) => {
        console.log("Data from search", data);
        const nextPage = data.next;
        setHasMorePages(
          !nextPage
            ?.substr(nextPage?.indexOf("page=") + 5)
            .match(/[a-zA-Z]/g) && nextPage !== null
        );
        setMovies(data.results);
      });
    }
  });

  // createEffect(() => {
  //   console.log(movies());
  // });

  return (
    <main class="page-container">
      <SearchBar
        setSearchInput={setSearchInput}
        setCurrentPage={setCurrentPage}
      />
      <section class="result-section">
        <Show
          when={movies.length > 0}
          fallback={
            <div>
              <h3>There are no movies with this name</h3>
            </div>
          }
        >
          <MoviesList
            movies={movies}
            currentPage={currentPage()}
            setCurrentPage={setCurrentPage}
            hasMorePages={hasMorePages()}
          />
        </Show>
      </section>
    </main>
  );
}

export default MoviesListPage;
