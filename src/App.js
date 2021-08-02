import React, { useState, useEffect } from "react";
import "./App.css";
import Data from "./components/storange";
import Home from "./components/Home/home";

function App() {
  const [render, setRender] = useState(<Home />);
  const listing = Data.list.map((item) => (
    <div onClick={() => setRender(item.component)}>{item.name}</div>
  ));
  return (
    <div className="App">
      <div className="sideBar">
        <div>
          <p className="nawa"> {Data.naw} </p>
        </div>

        <div className="lists">
          {listing}
        </div>

        <div>
          <p>{Data.copyRight}</p>
        </div>
      </div>
      <div style={{ marginRight: "27.71%" }}></div>
      {render}
    </div>
  );
}

export default App;
