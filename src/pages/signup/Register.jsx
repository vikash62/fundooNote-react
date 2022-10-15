import React, { Component } from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from "@mui/material";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { signUp } from '../../services/userService';
import { withRouter } from '../../components/withRouter';
export default class register extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            phoneNumber:"",
            password:""
            
        }
    }
    handleUsername=(event)=>{
        this.setState({
            name:event.target.value 
        })
    }
      
      handleUsernumber=(event)=>{
        this.setState({
            phoneNumber:event.target.value
        })
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
         submitUser= async (event)=>{
            event.preventDefault()  
            let SignUpdata={ 
                name:this.state.name,
                 phoneNumber:this.state.phoneNumber,
                  email:this.state.email,
                   password:this.state.password,
            }
          await signUp(SignUpdata).then((result)=>{
 this.props.history.push('/')
            console.log(result)
           }).catch((err)=>{
            console.log(err)
           })
         }
  render() {
    return (
      <div>
         <Grid>
                 <br /><br /><br />
            <Paper style={{ padding: 20, height: '70vh', width: 300, margin: '0 auto' }}>
                <Grid align="center">
                    <Avatar style={ { backgroundColor: '#83cbe3' }}><AddCircleOutlineOutlinedIcon /></Avatar>
                    <h2>Sign UP</h2>
                    <Typography variant="caption" gutterBottom>please fill the form to register</Typography>
                </Grid>
                    <form onSubmit={this.submitUser} autoComplete="off">
                    <TextField label='First Name' variant="standard" placeholder="Enter User First Name" fullWidth required value={this.state.user_name} onChange={this.handleUsername} />
                    <TextField label='Mobile Number' variant="standard" placeholder="Enter User Mobile Number" fullWidth required value={this.state.phoneNumber} onChange={this.handleUsernumber}/>
                    <TextField label='Email' variant="standard" placeholder="Enter User Email" fullWidth required value={this.state.email} onChange={this.handleUseremail}/>
                    <TextField label='Password' variant="standard" placeholder="Enter User Password" type={'password'} fullWidth required value={this.state.password} onChange={this.handleUserpassword}/>
                    <Button type="submit" color="primary" fullWidth variant="contained" style={{ margin: '60px 0 0 0' }}>
                        SIGN UP
                    </Button>
                </form>

            </Paper>
        </Grid>
      </div>
    )
  }
}
