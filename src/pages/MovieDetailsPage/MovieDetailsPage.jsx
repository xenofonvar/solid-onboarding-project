import { useParams } from "@solidjs/router";
import MovieDetailsCard from "../../components/MovieDetailsCard/MovieDetailsCard";
import "./MovieDetailsPage.css";
import { createEffect, onMount } from "solid-js";

function MovieDetailsPage() {
  const params = useParams();
  onMount(() => console.log(params));

  return (
    <main class="page-container">
      <MovieDetailsCard />
    </main>
  );
}

export default MovieDetailsPage;
