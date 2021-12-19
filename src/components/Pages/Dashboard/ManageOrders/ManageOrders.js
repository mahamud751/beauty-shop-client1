import React, { useEffect } from 'react';
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../../redux/actions/Action";



const ManageOrders = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
            .get("https://morning-brook-76931.herokuapp.com/booking")
            .catch((err) => {
            });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);
    const handleDlt = id => {
        const confirmation = window.confirm('Are you Sure?')
        if (confirmation) {
            console.log('yes')
            const url = `https://morning-brook-76931.herokuapp.com/booking/${id}`
            console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert("success")
                        const remaining = products.filter(service => service._id !== id)
                        setProducts(remaining)
                    }
                })
        }
    }
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right">{row.number}</TableCell>
                                <TableCell align="right">{row.date}</TableCell>
                                <TableCell align="right"> <p onClick={() => handleDlt(row._id)} style={{ cursor: "pointer" }}>{<DeleteIcon fontSize="large" />}</p></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>


    );
};

export default ManageOrders;