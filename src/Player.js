import React from "react";
import { Card } from "react-bootstrap"; 

const Player = ({ name, team, nationality, jerseyNumber, age, imgUrl }) => {
  return (
    //importation d card de bootstrap avec un style 
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

export default Player