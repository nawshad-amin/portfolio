import React from 'react'
import './contact.css';

const Contact = () => {
    return (
        <div>
            <div class="contact_section">
                 
                 <h5 class="Contact">CONTACT</h5>
                  <h6 id="contactHeading">Get in Touch</h6> 

                
   
               
                <div class="cantactdiv">
                    <img src="https://i.postimg.cc/7Yd4cbd9/Screen-Shot-2021-07-31-at-11-32-06-AM.png" alt=""/>
                   <input class="Ename" name="name" type="text" placeholder="Name"/>
                   <input class="Email" name="Email" type="text" placeholder="Email"/>
                     <input class="Emessage" name="message" type="text" placeholder="Message"/>
                     <a class="btn2" href="" >Submit</a>
                </div>
                
           


         </div>
        </div>
    )
}

export default Contact
