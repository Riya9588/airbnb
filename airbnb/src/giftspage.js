import React from 'react'
import './giftspage.css';
import {Button} from '@material-ui/core';
import giftResult from './giftResult';
import SearchResult from './SearchResult';
function giftspage(){
    return(
        <div className='giftspage'>
            
            <SearchResult 
            img="https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2017/09/Gemstones-to-buy-in-Rajasthan.jpg"          
            title="Jewelry and Gemstones"
            location="Johari bazaar in Jaipur is an ecstasy for jewelry lovers."
            description="Rajasthan is the hub of jewelry industry and hand cutting gems. Whether you want silver jewelry, gold jewelry, kundan, meena, or carved trinket, Rajasthan is the place where you find them in unique style and design. "
            />
           <SearchResult 
           img="https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2017/09/Rajputana-Paintings.jpg"
           title="Paintings"
           location="Hathi Pol bazar in Udaipur is the place to get all miniature paintings."
           description="Rajasthan is one of the pioneer seats of miniature paintings in India, popularly known as Mughal paintings. These paintings were tinted by Rajasthani painters who portray the royal and romantic life of Mughal’s in their paintings."/>
           <SearchResult 
           img="https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2017/09/Rajasthani-Carpet.jpg"
           title="Carpets"
           location="Jaipur has the best carpet industry in terms of fine craftsmanship on wool and silk"
           description="Rajasthan is the only ideal place where you will get extensive range of carpets in India as the state is the prime manufacturer. You will find diverse patterns like; charkona, mehrab, dushala, and shikar on finest quality of woolen fibers"/>
           <SearchResult 
           img="https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2017/09/Blue-Pottery-in-Rajasthan.jpg"
           title="Pottery"
           location="Blue pottery is made all over the state and hence can be found at most of the tourist places in Rajasthan."
           description="When it comes to famous art works, the blue pottery in Rajasthan comes on top of the list. They are used to enhance or liven up the beauty of home. "/>
           <SearchResult 
           img="https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2017/09/Puppets-Stuffed-Dolls-and-Toys-in-Rajasthan.jpg"
           title="Puppets, Stuffed Dolls, and Toys"
           location=" Udaipur, Chittorgarh and Nagaur include some of the markets to get wooden, clay or soft antique articles"
           description="Crafted from wood, clay, stones, and other easily available materials, toys and dolls in Rajasthan are not just meant for children but also for religious rituals and festivals. The puppets, better known as ‘kathputli’ are considered as the heart of Rajasthan handicraft that attract lots of locals and tourist alike"/>
           <SearchResult 
           img="https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2017/09/Rajasthani-Fabric.jpg"
           title="Fabric Work"
           location="Greater sample of these textiles are found during different fairs and festivals at like Nakki Lake, Ramdeoji, Pushkar, Baneshwar, Janmashtami, and during the Teej and Gangaur festivals."
           description="Known as the heartland of block printing, tie-dye work, bandhani, color-riot, embroidery, and applique, Rajasthan offers some most famous patterns that can allure anyone. These comprise Lahariya, Mothda, Ekdali, and Shikari."/>
        </div>
    )
}
export default giftspage