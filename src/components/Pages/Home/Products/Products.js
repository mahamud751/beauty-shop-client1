import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid } from "@mui/material";
import { setProducts } from "../../../../redux/actions/Action";
import ProductDisplay from "../ProductDisplay/ProductDisplay";

const Product = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
            .get("http://localhost:5000/products")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProducts(response.data.slice(0, 6)));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log("Products :", products);
    return (
        <>
            <Container className="mt-5">
                <Grid container spacing={4}>
                    {/* <h1>Total{products.length}</h1> */}
                    <ProductDisplay />
                </Grid>
            </Container>
        </>
    );
};

export default Product;
