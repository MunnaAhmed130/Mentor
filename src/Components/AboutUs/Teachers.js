import React from 'react';
import { Card } from 'react-bootstrap';

const Teachers = (props) => {
    const { name, profession, img, description } = props.teacher;
    return (
        <div className='teachers-section'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <h3>{name}</h3>
                    <h6>{profession}</h6>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Teachers;