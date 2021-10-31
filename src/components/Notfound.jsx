import notfound from '../asset/images/notfound.jpg';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        marginTop: "50px"
    }
})


const Notfound = () => {
    const classes = useStyle();
    return(
    <>
    <Box className={classes.root}>
        <img src={notfound} alt="notfound"/>
    </Box>
    </>
    );
}

export default Notfound;