import React from 'react';
import './Card.css'
function Card({src,title,description,price}){
    return(
        <div className='card'>
            
            <a href="/"><img src={src} alt="" /></a>
           
            <div className="card_info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <p>{price}</p>
            </div>
        </div>
    )

}
export default Card