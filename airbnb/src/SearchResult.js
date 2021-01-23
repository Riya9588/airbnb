import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import StarIcon from '@material-ui/icons/Star';
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom';

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    Availability,
    
}){
    return(
        <div className='searchResult'>
            <img src={img} alt=""/>
            <FavoriteBorderIcon 
            className="searchResult_heart"/>
            <div className='searchResult_info'>
                <div className='searchResult_infoTop'>
                    
                    <h2>{title}</h2>
                    <h3>{location}</h3>
                    <p>{description}</p>
                    
                </div>
                <div className='searchResult_infoBottom'>
                    <div className="searchResult_stars">
                <StarIcon className='searchResult_star'/>
                <p>
                    <strong>{star}</strong>
                </p>
                    </div>
                    <div className='searchResults_price'>
                       
                        <h2>{price}</h2>
                        <Link to={"/search"}>

                        <Button>{Availability}</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchResult