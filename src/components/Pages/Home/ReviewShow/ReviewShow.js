import { Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Rating from 'react-rating';

const ReviewShow = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data.slice(0, 6)))
    }, [])

    return (
        <>
            <Container>
                <h1 className="m-5">Customer Review</h1>
                <Grid container spacing={2}>
                    {
                        reviews.map(product =>
                            <Grid item xs={12} md={6} sx={{ p: 3, my: 3 }}>
                                <Card>
                                    {/* <CardMedia
                                    component="img"
                                    style={{ width: "100%", height: "300px" }}
                                    // height="550"
                                    image={img}
                                    alt="Paella dish"
                                /> */}
                                    <CardContent>
                                        <Typography variant="body2">
                                            {product.review}
                                        </Typography>
                                        <Typography sx={{ fontSize: 24, m: 3 }} color="text.secondary" gutterBottom>
                                            {product.name}
                                        </Typography>
                                        <Rating
                                            initialRating={product.rating}
                                            emptySymbol="far fa-star"
                                            fullSymbol="fas fa-star icon"
                                            readonly
                                        ></Rating>
                                    </CardContent>

                                </Card>
                            </Grid>
                        )
                    }
                </Grid>
            </Container>

        </>

    );
};

export default ReviewShow;