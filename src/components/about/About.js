import React, { useState } from 'react'
import Modal from "react-modal"
import './About.css';

const About = () => {
    const [theModal, setTheModal] = useState(false)
    return (
        <div className="about_section">
            <div className="allLeft">
                <img className="aboutPic" src="https://i.postimg.cc/sDLyDkT8/suli.jpg" alt="" />
                <h2>Nawshad Othman & Programmer</h2>
                <div class="aboutTable">

                    <p class="Pabout">Lorem itaque est perferendis  mollitia tempore sint, porro nesciunt. Officia fugit praesentium eveniet!</p>

                    <ul className="details">
                        <li><strong>birthday:  </strong> Nawshad Othman </li>
                        <li><strong>Age: </strong>  23 </li>
                        <li><strong>Address: </strong>  +91 0000000000</li>
                        <li><strong>Email: </strong><a href="mailto:nawshad.work@gmail.com"> Nawshad.work@gmail.com </a></li>
                        <li><strong>Phone: </strong> <a href="tel:+964 770 190 93 83">+964 770 190 93 83</a></li>
                        <li><strong>Study </strong> University of Human Development</li>
                        <li><strong>freelance:</strong>   available </li>
                    </ul>
                </div>
                <a className="btn" onClick={() => setTheModal(true)} >See More</a>
            </div>
            <Modal className='modal' isOpen={theModal} onRequestClose={() => setTheModal(false)}>
                <div className='allModal'>
                    <div>
                        <h1>Skills</h1>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                    </div>
                    <div>
                        <h1>Hobbies</h1>
                        <li>Photography</li>
                        <li>Illustration</li>
                        <li>Video Games</li>
                        <li>Sports and Exercise</li>


                    </div>
                    <div>
                        <h1>Degree</h1>
                        <li>Bachelor in Information Technology</li>
                    </div>
                    <div>
                        <h1>Location</h1>
                        <p>Sulaymaniyah-Iraq</p>

                    </div>
                    <div>
                        <img className="closeModalBtn" src="/Users/nawshad/Desktop/imgs/close-button-png-30230.png" alt="" />
                    </div>
                </div>

            </Modal>

        </div>
    )
}

export default About
