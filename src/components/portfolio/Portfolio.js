import React from 'react';
import './portfolio.css'
import Storage from '../storange';
import { div } from 'prelude-ls';

const Portfolio = () => {
    const rending =Storage.portPic.map((item)=>   
    <a  alt="Big image" title="Big image"><img src={item.photo} /></a> 
 )
    return (
        <div className="allPort">
             <div className="port_section">
                <div>
                <h5 className="PORTFOLIO">PORTFOLIO</h5></div>
                <div className="portBar">
                    <h6>Creative Portfolio</h6> 
                    <ul className="portList">
                        <li>All</li>
                        <li>Ui/Ux</li>
                        <li>Website</li>
                        <li>Graphic</li>
                        <li>Creative</li>
                      </ul> 
                      
                </div>
                <div className="cards">
    <div className="deeper">
    {rending} 
            </div>
</div>
              </div>
            
        </div>
    )
}

export default Portfolio
