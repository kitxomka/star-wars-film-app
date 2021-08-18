import { useState, useEffect } from "react";
import axios from "axios";


export const useFilmFetch = () => {
    const [ films, setFilms ] = useState([]);
    const [ loading, setLoading ] = useState( false );

    const url = 'https://www.swapi.tech/api/films';
  
    useEffect(() => {
      fetchFilms();
    }, []);

    const fetchFilms = async () => {
      try {
         const data = await axios 
         .get( `${url}` )
         .then( res => {
            console.log(res);
            const allFilms = res.data.result;
            setFilms( allFilms );
         });
         setLoading(true);
      } catch (e) {
         console.log(e);
      }
   }
     return { films, loading, fetchFilms };
  };

  export default useFilmFetch;