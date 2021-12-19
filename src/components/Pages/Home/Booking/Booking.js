import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './Booking.css'
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import { Alert, Button, TextField } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';
import Navigation from '../../../Shared/Navigation/Navigation';
import { useParams } from 'react-router';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};

const Booking = () => {
    const { id } = useParams()
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const [products, setProducts] = useState([])
    const [success, setSuccess] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [id])

    const onSubmit = data => {

        axios.post('http://localhost:5000/booking', data)
            .then(res => {
                if (res.data.insertedId) {
                    setSuccess(true)
                    reset()

                }
            })
    };
    return (
        <>
            <Navigation></Navigation>
            <Box sx={style} className="bookingOrder">
                <Typography id="transition-modal-title" variant="h6" component="h2">
                    {products.name}
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <TextField
                            id="outlined-size-small"
                            sx={{ width: "90%", m: 1 }}
                            {...register("name", { required: true, maxLength: 20 })}
                            defaultValue={user.displayName}
                            label="Name"
                            size="small"
                        />

                        <TextField
                            id="outlined-size-small"
                            sx={{ width: "90%", m: 1 }}
                            {...register("email")}
                            defaultValue={user.email}
                            label="Email"
                            size="small"
                        />
                        <TextField
                            id="outlined-size-small"
                            sx={{ width: "90%", m: 1 }}
                            {...register("number")}
                            label="Phone"
                            size="small"
                        />
                        <TextField
                            id="outlined-size-small"
                            sx={{ width: "90%", m: 1 }}
                            {...register("address")}
                            label="Address"
                            size="small"
                        />
                        <TextField
                            id="outlined-size-small"
                            sx={{ width: "90%", m: 1 }}
                            {...register("date")}
                            label="Date"
                            size="small"
                        />

                        <Button type="submit" variant="contained">BOOKING</Button>
                    </form>

                </Typography>
                {success && <Alert severity="success">Booking successfully!</Alert>}


            </Box>


        </>
    );

};

export default Booking;