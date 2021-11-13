import { Container, Grid, Box, Typography, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';

const Bikes = ({ slice }) => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('https://shielded-savannah-24056.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])



    return (
        <Container>
            <Typography sx={{ color: 'blue', fontWeight: '600', my: '15px' }} variant="h4">Our Collections</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        bikes.slice(0, slice).map(bike => <Bike
                            key={bike._id}
                            bike={bike}
                        ></Bike>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Bikes;