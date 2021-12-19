import { Alert, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
const Register = () => {
    const [loginData, setLoginData] = useState({})
    const history = useHistory()
    const { registerUser, isLoading, user, authError } = useAuth()

    const handleOnBlur = e => {

        const filed = e.target.name
        const value = e.target.value
        const newValue = { ...loginData }
        newValue[filed] = value
        console.log(newValue)
        setLoginData(newValue)
        // console.log(filed, value)
    }
    const handleLogin = e => {
        if (loginData.password !== loginData.password2) {
            alert('sorry')
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)

        e.preventDefault()
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
                        <Typography sx={{ mt: 2 }} variant="body1" gutterBottom>
                            <img style={{ width: '50%' }} src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/avatar.svg" alt="" />
                        </Typography>
                        {!isLoading && <form onSubmit={handleLogin}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                onBlur={handleOnBlur}
                                name="name"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                type="email"
                                onBlur={handleOnBlur}
                                name="email"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                label="Your Password"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                label="Your Password"
                                variant="standard" />

                            <Button type='submit' sx={{ width: '75%', m: 1 }} variant="contained">Register</Button>
                            <NavLink style={{
                                textDecoration: 'none'
                            }} to="/login"><Button variant="text">Already Register ?Please Login</Button></NavLink>

                        </form>}
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Successfully Register</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>

                </Grid>
            </div >
        </div>
    );
};

export default Register;