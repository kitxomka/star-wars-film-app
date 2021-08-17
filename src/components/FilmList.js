import { ListGroup, Card } from "react-bootstrap";


const FilmsList = ({ films, handleClick, activeItemId }) => {

  const filmListHtml = films.map( film => 
    <ListGroup.Item key={ film?.uid } >
      <div 
        className={ `listItem ${activeItemId === film?._id ? 'active-item' : '' }` } 
        id={ film?._id } 
        onClick={ handleClick }
      >
        { film?.properties?.title }
      </div>
    </ListGroup.Item>
  );
    
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <h4>Film List</h4>
          </Card.Title>
          <ListGroup style={{ marginTop: '1rem' }}>
            { filmListHtml }
          </ListGroup> 
        </Card.Body>
      </Card>   
    </>
  );
}


export default FilmsList;