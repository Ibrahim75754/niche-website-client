import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductsUpdate = () => {
    const { id } = useParams();
    const [product, setProduct] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data =>
                setProduct(data));
    }, []);
    console.log(product)
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProductInfo = { ...product };
        newProductInfo[field] = value;
        console.log(newProductInfo);
        setProduct(newProductInfo);

    }


    const handleBookingSubmit = e => {
        // collection data
        /* const appointment = { ...product, time, serviceName: name, date: date.toLocaleDateString() };
        //send to server 
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleBookingClose();
                }
            })
 */
        e.preventDefault();
    }
    return (
        <div>
            <h1>Product Update {id}</h1>
            <Box>
                <form onSubmit={handleBookingSubmit}>
                    <TextField
                        disabled
                        label="Product Id"
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        defaultValue={id}
                        size="small"
                    />
                    <TextField
                        label="Image Url"
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="img"
                        onBlur={handleOnBlur}
                        defaultValue={product.img}
                        size="small"
                    />
                    <TextField
                        label="Product Name"
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="name"
                        onBlur={handleOnBlur}
                        defaultValue={product.name}
                        size="small"
                    />
                    <TextField
                        label="Product Name"
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="description"
                        onBlur={handleOnBlur}
                        defaultValue={product.description}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="price"
                        onBlur={handleOnBlur}
                        defaultValue={product.price}
                        size="small"
                    />
                    <Button type="submit" variant="contained">Submit</Button>
                </form>
            </Box>
            <TextField
                label="Product Name"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
            />
        </div>
    );
};

export default ProductsUpdate;