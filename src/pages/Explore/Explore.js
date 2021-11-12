import { CircularProgress } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import Bikes from '../Home/Bikes/Bikes';
import NavBar from '../Shared/NavBar/NavBar';

const Explore = () => {
    
    const slice = 10;
    return (
        <div>
            <NavBar />
            <Bikes
                slice={slice}
            ></Bikes>
        </div>
    );
};

export default Explore;