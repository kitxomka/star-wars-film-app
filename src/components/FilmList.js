import {  Col, ListGroup } from "react-bootstrap";


const FilmsList = ({ films, handleClick }) => {
  

  const filmListHtml = 
    films.map(film => (
      <>
      {/* <ListGroup.Item className="listItem" key={film?.uid} id={film?._id} onClick={handleClick}>{film?.properties?.title}</ListGroup.Item> */}
      <h6 className="listItem" key={film?.uid} id={film?._id} onClick={handleClick}>{film?.properties?.title}</h6>
      </>
    ));
    
    return (
      <>
            <Col className="film-details" sm={3}>
              <h4>Film List</h4><hr/>
              <ListGroup>
                {filmListHtml}
              </ListGroup>
            </Col> 
      </>
    )
}



export default FilmsList;