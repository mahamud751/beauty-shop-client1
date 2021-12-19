import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand >
                        <img className="img-fluid" src="https://i.ibb.co/j6gk3Kg/The-Spa-Queen-removebg-preview.png" alt="" style={{ width: "15%" }} />
                        <Typography>
                            THE SPA QUEEN
                        </Typography>
                    </Navbar.Brand>
                    <Navbar.Brand >

                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link as={Link} to="/home" style={{ color: "white" }}>   <Button style={{ textDecoration: 'none', color: 'white' }}>Home</Button></Nav.Link>
                        <Nav.Link as={Link} to="/explore"> <Button style={{ textDecoration: 'none', color: 'white' }}>More Products</Button></Nav.Link>



                        {user.email ?
                            <Box>
                                <NavLink to="/dashboard">
                                    <Button style={{ textDecoration: 'none', color: 'white' }}>Dashboard</Button>
                                </NavLink>

                                <Button style={{ textDecoration: 'none', color: 'white' }}>{user.displayName}</Button>

                                <Button style={{ textDecoration: "none", color: 'white' }} onClick={logOut} color="inherit">Logout</Button>
                            </Box>
                            :
                            <NavLink to="/login">
                                <Button style={{ textDecoration: 'none', color: 'white' }}>Login</Button>
                            </NavLink>

                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;