import React from 'react'
import './home.css';

function Home(){ 
    return (
        <div className="allHome" >
             
                <img className="homepic" src="https://i.postimg.cc/g2V8bK4r/162466267-3893342217414240-1191318389290449680-n.jpg" alt="" />
             
            <div className="details">
               <h1>Nawshad Othman</h1> 
                <p className="Phome">Hello, my name is Nawshad. I am a Designer / Front End Developer living in Sulaimanyah.</p>   
                <div className="iconList">
        <li><a href="https://www.instagram.com/nawshad_/"><img src="https://i.postimg.cc/BQF777LD/instagram.png" alt=""/></a></li>
        <li><a href="https://www.facebook.com/nawshad.kurdish/"><img src="https://i.postimg.cc/h4ZhZpWS/facebook.png" alt=""/></a></li>
        <li><a href="index.html"><img src="https://i.postimg.cc/rsssFtWX/twitter.png" alt=""/></a></li>
        </div> 
        </div>
       
        </div>
    )
}

export default Home
