import { useParams } from "@solidjs/router";
import MovieDetailsCard from "../../components/MovieDetailsCard/MovieDetailsCard";
import "./MovieDetailsPage.css";

function MovieDetailsPage() {
  const params = useParams();

  return (
    <main class="page-container">
      <MovieDetailsCard movieId={params.movieId} />
    </main>
  );
}

export default MovieDetailsPage;
