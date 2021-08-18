import './App.css';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import FilmDetails from './components/FilmDetails';
import FilmList from './components/FilmList';
import useFilmFetch from './components/useFilmFetch';




const App = () => {
  const { films, loading }  = useFilmFetch();
  const [ filmDetails, setFilmDetails ] = useState( null );
  const [ activeItemId, setActiveItemId ] = useState( null );

  useEffect(() => {
    // setLoading( true );
    const firstActive = films[0]?._id;
    const foundFilmDetails = getFilmById(films, firstActive);
    setFilmDetails(foundFilmDetails);
    setActiveItemId(firstActive);
    
  }, [films] )

  const handleClick = (e, films) => {
    const currentId = e.target.id;
    const gotFilmById = getFilmById(films, currentId);
    setFilmDetails(gotFilmById); 
    setActiveItemId(currentId);
  }

  const getFilmById = (films, id) => {
    const foundFilms = films.filter(film => film._id === id);
    if(foundFilms.length > 0){
      return foundFilms[0];
    } else {
      return null;
    }
  }
   
  return (
    <>
      <h1 className="pt-3 text-center font-details pb-3">Star Wars Films</h1>
      <Container style={{textAlign:'center'}}>
        { loading ? (<Row>
                      <Col sm={4}>
                        <FilmList films={films} activeItemId={activeItemId} handleClick={(e) => handleClick(e, films)} />
                      </Col>
                      <Col sm={8}>
                        <FilmDetails filmDetails={filmDetails} />
                      </Col>
                    </Row>) 
                  : <Spinner animation="border" role="status" /> } 
        
        </Container >
    </>
  );
}

export default App;
