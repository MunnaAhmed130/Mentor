import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Teachers = (props) => {
    const { name, profession, img, description } = props.teacher;
    return (
        <Col>
            <Card className='teachers-section ' >
                <Card.Img variant="top" className="teachers-img" src={img} />
                <Card.Body>
                    <h3>{name}</h3>
                    <h6>{profession}</h6>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Teachers;