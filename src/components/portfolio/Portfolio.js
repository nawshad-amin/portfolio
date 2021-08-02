import React, { useState } from "react";
import "./portfolio.css";
import Storage from "../storange";
import { div } from "prelude-ls";
import Modal from "react-modal";
import ImgPopUp from "./imgPopUp";

const Portfolio = () => {
  const [getter, setgetter] = useState(null);
  const [openPic, setOpenPic] = useState(false);
  const rending = Storage.portPic.map((item) => (
    <a onClick={() => setgetter(item)} alt="Big image" title="Big image">
      <img onClick={() => setOpenPic(true)} src={item.photo} />
    </a>
  ));
  const customStyles = {
    content: {
      position: "absolute",
      top: "40px",
      left: "40px",
      right: "40px",
      bottom: "40px",
      background: "transparent",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      padding: "20px",
      border: "none",
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.70)",
    },
  };
  return (
    <div className="allPort">
      <div className="port_section">
        <div>
          <h5 className="PORTFOLIO">PORTFOLIO</h5>
        </div>
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
          <div className="deeper">{rending}</div>
        </div>
      </div>
      <Modal
        shouldCloseOnEsc={true}
        style={customStyles}
        isOpen={openPic}
        onRequestClose={() => setOpenPic(false)}>   
        <div className="picModal">
          <ImgPopUp getter={getter} />
        </div>
      </Modal>
    </div>
  );
};

export default Portfolio;
