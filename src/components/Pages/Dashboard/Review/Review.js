import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
// import './Review.css'
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';


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

const Review = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('success')
                    reset()
                }
            })
    };
    return (
        <>
            <Box sx={style} className="bookingOrder">
                <Typography id="transition-modal-title" variant="h6" component="h2">

                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            id="outlined-size-small"
                            sx={{ width: "90%", m: 1 }}
                            {...register("name", { required: true, maxLength: 20 })}
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            id="outlined-size-small"
                            sx={{ width: "90%", m: 1 }}
                            {...register("email")}
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            id="outlined-textarea"
                            sx={{ width: "90%", m: 1 }}
                            {...register("review")}
                            label="Review"
                            placeholder="Say Something"
                            multiline
                        />
                        <TextField
                            id="outlined-textarea"
                            sx={{ width: "90%", m: 1 }}
                            {...register("rating")}
                            label="Rating"
                            placeholder="Rating"
                            multiline
                        />

                        <Button type="submit" variant="contained">Comment</Button>
                    </form>

                </Typography>
            </Box>

        </>
    );
};

export default Review;