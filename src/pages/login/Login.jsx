import React, { Component } from 'react'
import { Avatar, Grid, Paper, TextField,Button, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom'
import { signIn } from '../../services/userService';
import { withRouter } from '../../components/withRouter';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
        }
    }
    handleUseremail=(event)=>{
        this.setState({
            email:event.target.value
        })
}
   handleUserpassword=(event)=>{
        this.setState({
            password:event.target.value
        })
     }
      submitLogin= async (event)=>{
            event.preventDefault()  
            let SignIndata={
                  email:this.state.email,
                   password:this.state.password,
            }
          await signIn(SignIndata).then((result)=>{

            console.log(result.data.responseData)
            // alert("succesfully logged in")
            localStorage.setItem('token',result.data.responseData)
            this.props.history.push('/home')
           }).catch((err)=>{
             alert("Email or Password is incorrect")
            console.log(err)
           }) 
         }
  render() {
    return (
      <div>
            <br /><br /><br />
            <Grid>
                <Paper style={{padding: 20, height: '70vh', width: 300, margin: '0 auto'}}>
                    <Grid align='center'>
                        <Avatar style={{ backgroundColor: '#83cbe3' }}><LockOutlinedIcon /></Avatar>
                        <h2>Login</h2>
                    </Grid>
                    <form onSubmit={this.submitLogin} autoComplete="off">
                    <TextField label='Email' variant="standard" placeholder="Enter User Email" fullWidth required value={this.state.email} onChange={this.handleUseremail}/>
                    <TextField label='Password' variant="standard" placeholder="Enter User Password" type={'password'} fullWidth required value={this.state.password} onChange={this.handleUserpassword}/>
                  
                    <br/>
                    {/* <Link to='/home'> */}
                    <Button type="submit" color="primary" fullWidth variant="contained" style={{margin:'60px 0 0 0' }}>
                    SIGN IN
                    </Button>
                    {/* </Link> */}
                      </form>
                    <Typography style={{margin:'10px 0'}}>
                    
                    <Link to='/forget-password'>Forgot Password</Link>
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
}

export default withRouter(Login) ;