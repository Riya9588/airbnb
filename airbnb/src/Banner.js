import React, { useState } from 'react';
import './Banner.css';
import {Button} from '@material-ui/core';
import Search from './Search';
import { useHistory } from 'react-router-dom';
function Banner(){
    const history=useHistory();
    const [showSearch,setShowSearch]= useState(false);
    return(
        <div className= 'banner'>
            <div className='banner_search'>
            {showSearch && <Search />}

 <Button onClick={()=>setShowSearch(!showSearch)} className='banner_searchbutton' variant='outlined'>
     {showSearch ? "Hide" : "Search Dates"}
 </Button>
            </div>
            <div className='banner_info'>
                <h1>Once a year,go someplace you've never been before</h1>
<Button onClick={()=> history.push('/search')} variant='outlined'>Explore NearBy</Button>
            </div>
        </div>
    )
}
export default Banner