import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { TextField, Typography, Button, Alert } from '@mui/material';
import { Box } from '@mui/system';


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
const ProductAdd = () => {
    const { register, handleSubmit, reset } = useForm();
    const [success, setSuccess] = useState(false);
    const onSubmit = data => {
        axios.post('https://morning-brook-76931.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    setSuccess(true);
                    reset()
                }
            })
    };
    return (
        <Box sx={style} className="bookingOrder">
            <Typography id="transition-modal-title" variant="h6" component="h2">

            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        id="outlined-size-small"
                        sx={{ width: "90%", m: 1 }}
                        {...register("name")}
                        label="Name"
                        size="small"
                    />
                    <TextField
                        id="outlined-size-small"
                        sx={{ width: "90%", m: 1 }}
                        {...register("description")}
                        label="Description"
                        size="small"
                    />
                    <TextField
                        id="outlined-size-small"
                        sx={{ width: "90%", m: 1 }}
                        {...register("price")}
                        label="Price"
                        size="small"
                    />
                    <TextField
                        id="outlined-textarea"
                        sx={{ width: "90%", m: 1 }}
                        {...register("img")}
                        label="img url"
                        size="small"
                    />

                    <Button type="submit" variant="contained">ADD PRODUCT</Button>
                </form>

            </Typography>
            {success && <Alert severity="success">Product added successfully!</Alert>}
        </Box>

    );

};

export default ProductAdd;