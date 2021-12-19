import { Alert, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { loginUser, isLoading, user, authError, signWithGoogle } = useAuth()
    console.log(user)

    const location = useLocation()
    const history = useHistory()
    const handleOnChange = e => {

        const filed = e.target.name
        const value = e.target.value
        const newValue = { ...loginData }
        newValue[filed] = value
        setLoginData(newValue)

    }
    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }
    const handleGoogle = () => {

        signWithGoogle(location, history)
    }
    return (
        <div style={{ backgroundColor: "#2ED298" }}>
            <div className="container-fluid" style={{ background: "white" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={7} sx={{ m: 0, p: 0 }}>
                        <img style={{ width: '75%' }} src="https://github.com/sefyudem/Responsive-Login-Form/blob/master/img/wave.png?raw=true" alt="" />

                        <img style={{ width: '75%', marginTop: "-800px" }} src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/bg.svg" alt="" />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography variant="body1" gutterBottom>
                            <img style={{ width: '50%' }} src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/avatar.svg" alt="" />
                        </Typography>
                        <form onSubmit={handleLogin}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                onChange={handleOnChange}
                                name="email"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                label="Your Password"
                                variant="standard" />

                            <Button type='submit' sx={{ width: '75%', m: 1 }} variant="contained">Login</Button>
                            <NavLink style={{
                                textDecoration: 'none'
                            }} to="/register"><Button variant="text">New User? Please Register First</Button></NavLink>

                        </form>
                        <p>---------------------------------------</p>
                        <Button onClick={handleGoogle} sx={{ width: '75%', m: 1 }} variant="contained">Google Sign In</Button>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Successfully Login</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>

                </Grid>
            </div >
        </div>
    );
};

export default Login;