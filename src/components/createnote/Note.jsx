import React, { Component } from 'react'
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import HubRoundedIcon from '@mui/icons-material/HubRounded';
import FilterNoneRoundedIcon from '@mui/icons-material/FilterNoneRounded';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import PhotoRoundedIcon from '@mui/icons-material/PhotoRounded';
import SaveAltRoundedIcon from '@mui/icons-material/SaveAltRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import { TextField } from '@mui/material';
import { notedata } from '../../services/noteservice';


 class Note extends Component {
   constructor(){
        super();
        this.state={
            openCard:true,
              title:'',
            description:''
        }
    }
    // handlenote=()=>{
    
    // };
        handleUsername=(event)=>{
        this.setState({
            title:event.target.value 
        })
    }
      
      handleUsernumber=(event)=>{
        this.setState({
            description:event.target.value
        })
      }
     
         handlenote= async (event)=>{
            event.preventDefault()  
            let noteData={ 
                title:this.state.title,
                 description:this.state.description,

            }
            await notedata(noteData).then((result)=>{
            console.log(result)
           }).catch((err)=>{
            console.log(err)
           })
               this.setState({
            openCard:!this.state.openCard,
        });
         }
  render() {
    return (
       <div>
        <form onSubmit={this.handlenote} autoComplete="off">
            <TextField type="text" style={{width: '300px'}} placeholder='Title'
            variant='standard' inputProps={{disableUnderline:true}} value={this.state.title} onChange={this.handleUsername} /> 
         <TextField multiline type="text" style={{width: '300px'}} placeholder='Take a note....'
          variant='standard' inputProps={{disableUnderline:true}} value={this.state.description} onChange={this.handleUsernumber} />
       
            <button type='submit' onClick={this.handlenote}>close</button>
       
           </form>
           <div className='icons'>
                   <NotificationAddOutlinedIcon/>
                   <GroupAddRoundedIcon/>
                 <ColorLensOutlinedIcon/>
                    <FilterNoneRoundedIcon/>
                   <SaveAltRoundedIcon/>
                   <MoreVertRoundedIcon/>
          
           
           </div>
           
 </div>
    )
  }
}
export default Note;
