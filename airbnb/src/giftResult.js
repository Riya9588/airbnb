import React from 'react';
import './giftResult.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import StarIcon from '@material-ui/icons/Star';
import {Button} from '@material-ui/core';

function giftResult({
    img,
    location,
    title,
    description,
   
    
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
               
                
            </div>
        </div>
    )
}
export default giftResult;