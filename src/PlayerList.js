
import React from "react";
import Player from "./Player";
import players from "./players";

const PlayersList = () => {
  //  Display all players inside the PlayerList.js (by mapping) through all the elements in the array of players
  return (
    <div style={{ display: "flex",  margin:"150px" , backgroundColor:"pink" }}>
      {players.map((player, x) => (
        // our component player with props :key
        <Player key={x} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;