import { useState, useEffect } from "react";
import axios from "axios";


export const useFilmFetch = () => {
    const [films, setFilms] = useState([]);

    const url = 'https://www.swapi.tech/api/films';
  
    useEffect(() => {
      fetchFilms();
    }, []);

    const fetchFilms = () => {
       axios.get(`${url}`)
       .then(res => {
          const allFilms = res.data.result;
          setFilms(allFilms);
       })
       .catch(error => console.error(`Error: ${error}`));
   }
     return { films, fetchFilms };
  };

  export default useFilmFetch;