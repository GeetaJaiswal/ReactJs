import { FormControl, FormGroup, Paper, Container, TextField, Button } from "@mui/material";
import {makeStyles} from '@mui/styles';
import { useState } from "react";
import { addUser } from "../services/api";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        padding: "50px 30px",
    },
    paper: {
        padding: "30px 30px",
    },
    form: {
        '& > *': {
            marginTop: "20px",
        }
    }
})

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: '',
}


const Adduser = () => {
    const [user, setUser] = useState(initialValue);
    const {name, username, email, phone} = user;
    const history = useHistory();


    const onchangeValue = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]:e.target.value})  //...user => previous state
        console.log(user);
    }


    const addUserDetails = async() => {
        await addUser(user);
        history.push("/");
    }

    const classes = useStyles();
    return(
        <Container maxWidth="sm" className={classes.root}>
            <Paper className={classes.paper}>
            <form onSubmit={addUserDetails}>
                <FormGroup className={classes.form}>
                    <FormControl>
                        <TextField
                            id="outlined-number"
                            label="Name"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            name="name"
                            value={name}
                            onChange={(e)=>onchangeValue(e)}
                        /> 
                        </FormControl>
                        <FormControl>
                        <TextField
                            id="outlined-number"
                            label="User Name"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            name="username"
                            value={username}
                            onChange={(e)=>onchangeValue(e)}
                        />
                        </FormControl>
                        <FormControl>
                        <TextField
                            id="outlined-number"
                            label="Email"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            name="email"
                            value={email}
                            onChange={(e)=>onchangeValue(e)}
                        />
                        </FormControl>
                        <FormControl>
                            <TextField
                                id="outlined-number"
                                label="Phone"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                name="phone"
                                value={phone}
                                onChange={(e)=>onchangeValue(e)}
                            />
                    </FormControl>
                    <Button variant="contained" type="submit">Add User</Button>            
                </FormGroup>
                </form>

                
            </Paper>
        </Container>

    )
}

export default Adduser;