import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../../../SharedComponents/Footer/Footer';
import Header from '../../../SharedComponents/Header/Header';
import Course from '../Course/Course';

const Courses = () => {
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
                    <Row xs={1} lg={3} md={2} className='g-4'  >
                        {
                            courses.map(course => <Course
                                key={course.id}
                                Course={course}></Course>)}
                    </Row>
                </Container>

            </div>
            {/* <Footer></Footer> */}
        </>

    );
};

export default Courses;