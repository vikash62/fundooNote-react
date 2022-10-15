import React, { Component } from 'react'
import "./Home.css"
import AppBar from "../../components/AppBar";
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import CollectionsRoundedIcon from '@mui/icons-material/CollectionsRounded';
import ClearAllRoundedIcon from '@mui/icons-material/ClearAllRounded';
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import HubRoundedIcon from '@mui/icons-material/HubRounded';
import FilterNoneRoundedIcon from '@mui/icons-material/FilterNoneRounded';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import PhotoRoundedIcon from '@mui/icons-material/PhotoRounded';
import SaveAltRoundedIcon from '@mui/icons-material/SaveAltRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import SwipeDrawer from '../../components/SwipeDrawer';
import LogoutIcon from '@mui/icons-material/Logout';
import { TextField } from '@mui/material';
import { getNoteList, notedata } from '../../services/noteservice';

import { Card, CardContent, CardActions, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';


export default class Home extends Component {
  
    constructor(){
        super();
        this.state={
            openCard:true,
              title:'',
            description:'',
            notedata:[],
            archive:false
        }
    }

    componentDidMount(){
      getNoteList()
      .then((result)=>{
        console.log(result.data);
        this.setState({
          notedata:result.data
        })
      }).catch((err)=>{
        console.log(err);
      })
    }
    handlenote=()=>{
        this.setState({
            openCard:!this.state.openCard,
        });
    };
     handlenotes=()=>{
       getNoteList().then((result)=>{
        this.setState({
          notedata:result.data
        })
       })
    };
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
      handleArchive=()=>{
        this.setState({archive:true})
                let data={ 
                title:this.state.title,
                 description:this.state.description,
                 archive:this.state.archive
                }
                   notedata(data).then((result)=>{
            console.log(result)
             this.handlenotes()
           }).catch((err)=>{
            console.log(err)
           })
            this.setState({
            openCard:!this.state.openCard,
        });
      }
     
         submitUser= async (event)=>{
            event.preventDefault()  
            let noteData={ 
                title:this.state.title,
                 description:this.state.description,
             
     }
            await notedata(noteData).then((result)=>{
            console.log(result)
            this.handlenotes()
           }).catch((err)=>{
            console.log(err)
           })
            this.setState({
            openCard:!this.state.openCard,
        });
         }
         
  render() {
    return (
        <>
        <SwipeDrawer/>
      <div className='note-main'>
        {this.state.openCard?
          <div className='take-a-note' onClick={this.handlenote} >
            <TextField style={{width:"240%"}} type="text" placeholder='Take a note....' /> 
            
            <div className='icon'>
            <CollectionsRoundedIcon/>
            <ClearAllRoundedIcon/>
           
           </div>
           
        </div>:
      
        <div className='person'>   
      
          <div className='pinIcon'>
             <PushPinOutlinedIcon/>
             </div>
                 <form onSubmit={this.submitUser} autoComplete="off">
            <TextField type="text" style={{width: '300px'}} placeholder='Title'
            variant='standard' inputProps={{disableUnderline:true}} value={this.state.title} onChange={this.handleUsername} /> 
         <TextField multiline type="text" style={{width: '300px'}} placeholder='Take a note....'
          variant='standard' inputProps={{disableUnderline:true}}  value={this.state.description} onChange={this.handleUsernumber} />
        
           <div className='icons'>
                   <NotificationAddOutlinedIcon/>
                   <GroupAddRoundedIcon/>
                   <ColorLensOutlinedIcon/>
                   <FilterNoneRoundedIcon/>
                   <SaveAltRoundedIcon onClick={this.handleArchive}/>
                   <MoreVertRoundedIcon/>
              
           <div className='btnclose'>
            <button type='submit'>close</button>
            </div>
          
            </div>
           
        </form>
          
        </div>
        
  }
  <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',paddingLeft:'50px'}}>
    {this.state.notedata.map((notes,index)=>{
      // if(notes.isArchived===true && notes.ispinned!==true)
      return(
        // <div className='note'>
        //   <p>{notes.title}</p>
        //  <p>{notes.description} </p> 
        // </div>
        // <StyledCard>
        <div className='view-note'>
                <CardContent>
                    <Typography>{notes.title}</Typography>
                    <Typography>{notes.description}</Typography>
                </CardContent>
                <CardActions>
                    <Archive 
                        fontSize="small" 
                        style={{ marginLeft: 'auto' }} 
                        onClick={this.submitArchive}
                    />
                    <Delete 
                        fontSize="small"
                       
                    />
                </CardActions>
        {/* // </StyledCard> */}
        </div>
      )
    })}
      </div>
      </div>
      </>
    )
  }
}
