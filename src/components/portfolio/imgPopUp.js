import React from 'react'
import Storage from '../storange'

const ImgPopUp = (props) => {
    const item = props.getter;
    return (
        <div>
            <a alt="Big image" title="Big image"><img src={item.photo} /></a>
        </div>
    )
}

export default ImgPopUp
