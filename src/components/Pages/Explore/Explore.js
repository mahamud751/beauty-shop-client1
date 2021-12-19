import { Container, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../redux/actions/Action";
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Home/Banner/Banner';
import ProductDisplay from '../Home/ProductDisplay/ProductDisplay';

const Explore = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
            .get("https://morning-brook-76931.herokuapp.com/products")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <Container className="mt-5">
                <Grid container spacing={4}>
                    {/* <h1>Total{products.length}</h1> */}
                    <ProductDisplay />
                </Grid>
            </Container>
        </>
    );
};

export default Explore;