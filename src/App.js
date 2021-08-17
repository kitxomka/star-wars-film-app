import './App.css';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Tab } from 'react-bootstrap';
import FilmDetails from './components/FilmDetails';
import FilmList from './components/FilmList';
import useFilmFetch from "./components/useFilmFetch";



const App = () => {
  const { films }  = useFilmFetch();
  const [activeFilmId, setActiveFilmId] = useState(null);
  const [filmDetails, setFilmDetails] = useState(null);
  
    
  useEffect(() => {
    const firstActive = films[0]?._id;
    const foundFilmDetails = getFilmById(films, firstActive);
    setFilmDetails(foundFilmDetails);
  }, [films] )

  
  const handleClick = (e, films) => {
    const currentId = e.target.id;
    const gotFilmById = getFilmById(films, currentId);
    setFilmDetails(gotFilmById);
  }

  const getFilmById = (films, id) => {
    const foundFilms = films.filter(film => film._id === id);
    if(foundFilms.length > 0){
      return foundFilms[0];
    }else{
      return null;
    }
  }

  return (
    <>
      <h1 className="pt-3 text-center font-details pb-3">Star Wars Films</h1>
      <div className="wrap-container">
        <Tab.Container id="list-group-tabs-example">
          <Row>
          <FilmList films={films} handleClick={(e) => handleClick(e, films)} />
          <FilmDetails filmDetails={filmDetails} />
          </Row>
        </Tab.Container >
      </div>
    </>
  );
}

export default App;
