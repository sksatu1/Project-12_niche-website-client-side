import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import banner from '../../../images/banner.jpg'
import { Link } from 'react-router-dom';

const homeBanner = {
    background: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingTop: 150,
    paddingBottom: 150,
    /* 
    use following two properties and values to make transparent background 
    */
    backgroundColor: 'rgba(46, 68, 68, 0.9)',
    backgroundBlendMode: 'darken, luminosity'
}

export default function Banner() {
    return (
        <Box style={homeBanner} sx={{ flexGrow: 1 }}>
            <Container
                sx={{
                    display: 'flex ',
                    alignItems: 'center',
                    textAlign: 'left'
                }}
            >

                <Box>
                    <Typography variant="h6"
                        sx={{
                            color: "#51E1E1",
                            mb: '20px'
                        }}>
                        PURCHASE BIKE
                    </Typography>
                    <Typography variant="h4"
                        sx={{
                            mb: '20px',
                            color: 'white'
                        }}>
                        Purchase Your New Bike Today
                    </Typography>
                    <Typography variant="p"
                        sx={{
                            mb: '20px',
                            color: 'white'
                        }}>
                        Like to ride bike? We are here for you to serve you best riding bikes. Contact with us and purchase today.
                    </Typography>
                    <Box>
                        <Link style={{ textDecoration: 'none' }} to="explore">
                            <Button
                                sx={{
                                    backgroundColor: "#51E1E1",
                                    mt: "20px"
                                }}
                                variant="contained">Explore</Button>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box >
    );
}
