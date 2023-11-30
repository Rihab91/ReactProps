import React from "react";
import { Card } from "react-bootstrap"; 
  // notre object props de notre component contient ces infos :name,team ...
const Player = ({ name, team, nationality, jerseyNumber, age, imgUrl }) => {
  return (
    //importation de card apartir de bootstrap () de notre component

    <Card style={{ width: "35rem", margin: "10px", textAlign: "center" }} class="text-dark" border="primary">
      <Card.Img variant="top" src={imgUrl} alt={name} />
      <Card.Body>
        <Card.Title textAlign="center">{name}</Card.Title>
      
        <Card.Text color="blue" >
      
          Team: {team}<br />
          Nationality: {nationality}<br />
          Jersey Number: {jerseyNumber}<br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
  Player.defaultProps ={
  name:'Player',
  team:'Football team',
  nationality:'Unknown',
  jerseyNumber:'?',
  age:'?'
}


export default Player