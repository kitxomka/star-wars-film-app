import { useEffect, useState } from 'react';
import { Col, Tabs ,Tab } from "react-bootstrap";


const FilmDetails = ({filmDetails}) => {
    const savedFavFilms = JSON.parse(localStorage.getItem('favorites'));
    const [favorites, setFavorites] = useState(savedFavFilms || {});

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    

    
    const handleFavClick = (filmDetailsId) => {
        const tmpFavorites = {...favorites} // shallow copy - in favorites we have primitives
        if( tmpFavorites[filmDetailsId] ){
            delete(tmpFavorites[filmDetailsId]);
            
        }else{
            tmpFavorites[filmDetailsId] = true;
        }
        setFavorites(tmpFavorites);
    }

    // console.log('favorites:', favorites);


    const filmProps = filmDetails?.properties;
    return (
        <>
            <Col className="film-details" sm={9}>
                <h4>Film Details</h4><hr/>
                {/* {filteredfilmDetails} */}
                {/* <Tab.Content>
                    <Tab.Pane>
                    </Tab.Pane>
                </Tab.Content> */}
                <div>
                    <h6 key={filmDetails?.uid} className="title">{filmProps?.title}</h6>
                    <div className={ `fav ${favorites[filmDetails?._id] ? 'is-fav' : ''}`} key={filmDetails?._id} id={filmDetails?._id} onClick={() => handleFavClick(filmDetails?._id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
                    </div>
                    <div>Release Date : {filmProps?.release_date}</div>
                    <div>Director : {filmProps?.director}</div>
                    <div>Producer : {filmProps?.producer}</div>
                    <div>Description : {filmProps?.opening_crawl}</div>
                </div>
            </Col>
        </>
    )
}


export default FilmDetails;