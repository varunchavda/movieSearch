import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Singlecard = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`https://www.omdbapi.com/?apikey=727bbdc1&i=${id}`);
      const data = await response.json();
      setMovieDetails(data);
      setIsLoading(false); // Set loading to false once the data is fetched
    };
    fetchMovieDetails();
  }, [id]);

  if (isLoading) {
    return (
   
        <div className="loading">Loading..</div>
  
    );
  }

  if (!movieDetails) {
    return <div>No movie details available</div>;
  }

  const { Title, Poster, Plot, Year, Genre } = movieDetails;

  return (
    <div className="single-movie">
      <h1>{Title}</h1>
      <img src={Poster} alt={Title} />
      <p><strong>Year:</strong> {Year}</p>
      <p><strong>Genre:</strong> {Genre}</p>
      <p>{Plot}</p>
    </div>
  );
};

export default Singlecard;
