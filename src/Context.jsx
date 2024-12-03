import React, { useContext, useEffect, useState } from "react";
import { data } from "react-router-dom";

// const API_URL = `https://www.omdbapi.com/?apikey=${<process className="env VITE"></process>_API_KEY}&s=Blade Runner`;
// const API_URL = `https://www.omdbapi.com/?apikey=727bbdc1&s=Blade%20Runner`;

const API_URL = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: false, msg: "" }); // Corrected initial state
  const [query, setQuery] = useState(""); // for search purpose

  const getMovies = async (url) => {
    if (!query) {
      // Do not make the API call if the query is empty
      return;
    }

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setIsError({
          show: false,
          msg: "",
        });
        setMovie(data.Search);
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
      setIsError({
        show: true,
        msg: "An error occurred while fetching data.",
      });
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`);
    }, 200);

    return () => clearTimeout(timerOut);
  }, [query]);

  return (
    <AppContext.Provider value={{ isLoading, isError, movie, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };

// https://www.omdbapi.com/?apikey=727bbdc1&s=titanic
