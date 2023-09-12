import "./SearchBar.css";
import { debounce } from "../../helpers/helpers";
function SearchBar({ setSearchInput, setCurrentPage }) {
  function inputHandle(e) {
    setSearchInput(e.target.value);
    setCurrentPage(1);
  }

  return (
    <section class="searchbar-section">
      <input
        type="text"
        class="searchbar"
        placeholder="Search for a movie..."
        id="searchbar"
        onkeyup={debounce((e) => inputHandle(e))}
      />
    </section>
  );
}

export default SearchBar;
