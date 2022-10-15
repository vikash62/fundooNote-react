import { Avatar, Grid, Paper, TextField,Button, Typography } from "@mui/material";
import React from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom'
import AppBar from "../components/AppBar";
const ForgetPassword = ({handleChange}) => {
    const paperStyle = { padding: 20, height: '70vh', width: 300, margin: '0 auto' };
    const avatharStyle = { backgroundColor: '#83cbe3' };
    const buttonStyle ={margin:'60px 0 0 0' };
    const space ={margin:'10px 0'}
    return (
        <div>
                  <br /><br /><br />
            <Grid>
                <Paper style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatharStyle}><LockOutlinedIcon /></Avatar>
                        <h2>Forget Password</h2>
                    </Grid>
                    
                    <TextField label='Email' variant="standard" placeholder="Enter User Email" fullWidth required />
                
                  
                    <br/>
                    <Button type="submit" color="primary" fullWidth variant="contained" style={buttonStyle}>
                    SEND OTP
                    </Button>
                    <Typography style={space}>
                    <Link to='/'>Rembered Password? Signin</Link>
                    </Typography>
                    <Typography>
                    Do You have an account?
                   <Link to='/register'>Sign Up</Link>
                    </Typography>
                </Paper>
            </Grid>
        </div>

    )
}
export default ForgetPassword;