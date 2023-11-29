
import React from "react";
import Player from "./Player";
import players from "./players";

const PlayersList = () => {
  //parcourir la liste des players
  return (
    <div style={{ display: "flex",  margin:"150px" , backgroundColor:"pink" }}>
      {players.map((player, x) => (
        <Player key={x} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;