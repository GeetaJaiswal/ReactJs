import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
      <>
        <AppBar position="sticky">
          <Toolbar>
            <Typography flexGrow="1">CRUD</Typography>
            <Box>
                <Button color="inherit" component={Link} to="/">All User</Button>
                <Button color="inherit" component={Link} to="/add">Add User</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </>
    );
  }
  
  export default Navbar;