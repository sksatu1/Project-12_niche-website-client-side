import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, Container } from '@mui/material';
import UnstyledButtonCustom from '../ButtonRoot/UnstyledButtonCustom';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const Purchase = () => {
    const [order, setOrder] = useState({});

    const { id } = useParams();


    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    return (
        <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px' }}>
            <Card sx={{ maxWidth: 345 }}>

                <CardMedia
                    component="img"
                    height="194"
                    image={order.img}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="h6" color="text.secondary">
                        {
                            order.name
                        }
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        {
                            order.price
                        }
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Button variant="contained">Contained</Button>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Description</Typography>
                        <Typography paragraph>
                            {
                                order.description
                            }
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Container>
    );
};

export default Purchase;