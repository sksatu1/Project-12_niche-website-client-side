import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Order = ({ orderInfo }) => {
    const product = orderInfo.order;
    const { user } = useAuth();
    return (
        <Grid item xs={4} sm={8} md={6}>
            <Card sx={{ height: '100%', textAlign: 'left' }}>
                <CardMedia
                    // height="200px"
                    // width='50%'
                    component="img"
                    image={product.img}
                    alt="green iguana"
                />
                <CardContent>

                    <Typography gutterBottom sx={{ color: "blue", fontWeight: "600" }} variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography
                        sx={{ fontWeight: '600' }}
                        variant="h6" color="red">
                        price : {product.price}
                    </Typography>

                    <Typography variant="p">
                        Ordered by : {orderInfo.userName}
                    </Typography>
                    <br />
                    <Typography variant="p">
                        User email :{orderInfo.email}
                        <br />
                        Address : {orderInfo.address}
                        <br />
                        Phone : {orderInfo.phone}
                        <br />
                        Order ID : {orderInfo._id}
                        <br />
                        Product ID : {product._id}
                    </Typography>

                    <Typography
                        sx={{ fontWeight: '600' }}
                        variant="h6" color="red">
                        Status : {orderInfo.status}
                    </Typography>

                </CardContent>
            </Card>
        </Grid>
    );
};

export default Order;