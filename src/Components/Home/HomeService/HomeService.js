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
                <h1 className='pb-4 pt-5'>Our Popular Courses</h1>
                <Container>
                    <Row xs={2} lg={3} md={3} className='g-4'  >
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