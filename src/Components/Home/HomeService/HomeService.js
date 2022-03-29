import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../../Services/Course/Course';

const HomeService = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('/fakeCourses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <>
            {/* <Header /> */}
            <div className='pb-4 pt-5'>
                <h2 className='pb-4 pt-5 fs-1 fw-bolder'>Our Popular Courses</h2>
                <Container >
                    <Row sm={1} lg={3} md={2} className='g-4'  >
                        {
                            courses.slice(0, 6).map(course => <Course
                                key={course.id}
                                Course={course}></Course>)}
                    </Row>
                </Container>

            </div>
        </>

    );
};

export default HomeService;