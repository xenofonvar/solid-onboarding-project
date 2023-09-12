export async function getMovies(page) {
  return fetch(`https://moviesdatabase.p.rapidapi.com/titles?page=${page}`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d87f374b0dmshdf0dde28965cf4dp13384bjsnd7723e995383",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      throw error;
    });
}

export async function getSearchedMovies(searchedWord, page) {
  return fetch(
    `https://moviesdatabase.p.rapidapi.com/titles/search/title/${searchedWord}?exact=false&titleType=movie&page=${page}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d87f374b0dmshdf0dde28965cf4dp13384bjsnd7723e995383",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      throw error;
    });
}

export async function getMovieDetails(movieId) {
  return fetch(`https://moviesdatabase.p.rapidapi.com/titles/${movieId}`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d87f374b0dmshdf0dde28965cf4dp13384bjsnd7723e995383",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      throw error;
    });
}
