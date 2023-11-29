import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import PlayerList from "./PlayerList";  


function App() {
  return (
    <div className="Foot">
      <h1 style={{color: "red", margin: "10px", textAlign: "center" }} > International Football Players</h1>
      <>
      <PlayerList />
      </>
    </div>
  );
}

export default App;
