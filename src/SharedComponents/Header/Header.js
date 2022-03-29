import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const { user, logOut } = useAuth();

    const changeBackground = () => {
        if (window.scrollY >= 64) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
        // console.log(window.scrollY)
        // console.log(window.innerWidth)
    };
    // const changeBackground = () => {
    //     if (window.scrollY >= 64) {
    //         setNavbar(true);
    //     }
    //     else {
    //         setNavbar(false);
    //     }
    //     console.log(window.scrollY)
    // };

    // window.addEventListener('scroll', changeBackground);
    return (
        <>
            <Navbar
                className={navbar ? 'navbar active' : "navbar"}
                collapseOnSelect expand="lg"
                // bg="dark"
                variant="dark"
                fixed="top">
                <Container>
                    <Navbar.Brand href="#home">Mentor</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto links">
                            <Nav.Link as={HashLink} className="link" to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} className="link" to="/courses">Courses</Nav.Link>
                            <Nav.Link as={HashLink} className="link" to="/aboutUs">About Us</Nav.Link>
                            {user.displayName && <Nav.Link className='link'>{user.displayName}</Nav.Link>}


                            {user.photoURL && <Nav.Link as={HashLink} to="/"><img className='profile-pic' src={user.photoURL} alt="profile_picture" /></Nav.Link>}


                            {user.email ? <Button className='logOut-btn' variant='danger' onClick={logOut}>Log out</Button> : <Nav.Link as={HashLink} className="link" to="/login">Login</Nav.Link>}

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;