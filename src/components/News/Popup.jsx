import React from "react";
import Storage from "../storange";

const Popup = (props) => {
  const item = props.get;
  return (
    <div>
      <div>
        <img className="modalPic" src={item.pic} alt="" />
      </div>
      <div>
        <p className="modalDate">{item.date}</p>
      </div>
      <p className="modalLine">
        _________________________________________________________________________________________________________________________________
      </p>
      <div>
        <h2 className="modalTitle">{item.title}</h2>
      </div>

      <div>
        <p className="modalText">{item.text}</p>
      </div>
    </div>
  );
};

export default Popup;
