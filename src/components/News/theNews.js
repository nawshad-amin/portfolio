import { react } from '@babel/types';
import React from 'react';
import { useState } from 'react'
import './news.css';
import Modal from "react-modal"
import Data from '../storange';
import { div } from 'prelude-ls';
import Popup from './Popup';



const TheNews = () => {
    const [theModal, setTheModal] = useState(false)
    const [get, setGet] = useState(null)
    const addingCards = Data.card.map((item) =>
        <div class="photo1" onClick={() => setGet(item)}>
            <img onClick={() => setTheModal(true)} src={item.pic} />
            <h3>
                {item.date}
            </h3>
            <p id="dicription">{item.title}</p>
            <a>
                <p id="seeMore">
                    <span>___</span>
                </p>
            </a>
            <Modal isOpen={theModal} onRequestClose={() => setTheModal(false)}>
                        <div className="theModal">
                            <Popup get={get} />
                        </div>
                    </Modal>
        </div>
    )
    {
        return (
            <div>
                <div class="news_section">
                    <h5 class="News">
                        News
                    </h5>
                    <h6>
                        Latest News
                    </h6>
                    <div className="newsPhotos">
                        {addingCards}
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default TheNews

