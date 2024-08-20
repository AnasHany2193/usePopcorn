import { useEffect, useState } from "react";

const key = "59c51f23";

export function useMovies(query) {
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      // callBack?.();

      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setError("");
          setIsLoading(true);

          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${key}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies!");

          const data = await res.json();

          if (data.Response === "False") throw new Error("Movie Not Found!");

          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { isLoading, movies, error };
}
