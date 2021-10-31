
import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button } from '@mui/material'
import { getUsers, deleteuser} from '../services/api'
import { Link } from 'react-router-dom';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    // const classes = useStyles();

    useEffect(() => {
        getAllUsers();
   }, []);

    const getAllUsers = async () => {
        let response = await getUsers();
        //console.log(response.data);
        setUsers(response.data);
    }

    const deleteUser = async(id) => {
        await deleteuser(id);
        getAllUsers();
    }

    return (
        <Table >
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Edit</TableCell>
                    <TableCell>Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" component={Link} to={`/edit/${user.id}`}>Edit</Button>
                            </TableCell>
                        <TableCell>
                            <Button color="secondary" variant="contained" onClick={()=>deleteUser(user.id)}>Delete</Button>
                        </TableCell>     
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default AllUsers;
