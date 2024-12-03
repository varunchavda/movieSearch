import React from "react";
import { useGlobalContext } from "./Context";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const { movie, isLoading } = useGlobalContext();

  // if(isLoading){
  //   return(
      
  //       <div className='loading'>Loading..</div>
      
  //   )
  // }

  return (
    <>
      <section className="movie-page">
        <div className="container grid grid-4-col">
          {movie.map((curMovie) => {
            const { imdbID, Title, Poster } = curMovie;
            const movieName = Title.substring(0,15); //to limit the characters

            return <NavLink to={`movie/${imdbID}`} key={imdbID}>
               <div className="card">
                <div className="card-info"></div>
                  <h2>{movieName.length >= 15 ? `${movieName}... ` : movieName} </h2> {/* if the name is equal or more than 15 characters then ... will be shown on screen*/} 
                  <img src={Poster} alt="" />
               </div>
            </NavLink>;
          })}
        </div>
      </section>
    </>
  );
};
export default Movies;