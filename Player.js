import React from 'react';
import Card from 'react-bootstrap/Card';
const Player = ({ name, team, country, jerseyNumber, age, imageUrl }) => {
    return (
        <div>
            <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Img style={{width:'250px'}} variant="top" src={imageUrl} alt={name} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Team: {team}<br />
                        Country: {country}<br />
                        Jersey Number: {jerseyNumber}<br />
                        Age: {age}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Player;