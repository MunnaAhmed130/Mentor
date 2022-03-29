import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCoffee, faGraduationCap, faSmile, faUser } from '@fortawesome/free-solid-svg-icons';
import Teachers from './Teachers';

const AboutUs = () => {
    const [teachers, setTeachers] = useState([])
    useEffect(() => {
        fetch('/fakeTeachers.JSON')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return (
        <div>
            <Container fluid>
                <div className='about'>
                    <h2 className='fs-1 fw-bolder'>About us</h2>
                    <p>We are an organization trying to make the world a better place by spreading real life knowledge and skill. we have the best teachers and we give real life projects and assignments to better our learning capablity</p>
                </div>
                <Row className='info-row'>
                    <Col>
                        <p className='icon'> <FontAwesomeIcon icon={faSmile} /></p>
                        <span>
                            750
                        </span>
                        <p>HAPPY STUDENTS</p>
                    </Col>
                    <Col>
                        <p className='icon'> <FontAwesomeIcon icon={faBook} /></p>
                        <span>
                            867
                        </span>
                        <p>APPROVED COURSES</p>
                    </Col>
                    <Col>
                        <p className='icon'> <FontAwesomeIcon icon={faUser} /></p>
                        <span>
                            250
                        </span>
                        <p>CERTIFIED TEACHERS</p>
                    </Col>
                    <Col>
                        <p className='icon'> <FontAwesomeIcon icon={faGraduationCap} /></p>
                        <span>
                            2500
                        </span>
                        <p>GRADUATED STUDENTS</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <h2 className='p-4'>Our Best Teachers</h2>
                <Row md={3} lg={4} className='g-4 pb-4 pt-4'>
                    {
                        teachers.map(teacher => <Teachers
                            teacher={teacher}
                            key={teacher.id}></Teachers>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;