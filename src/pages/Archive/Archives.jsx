import React, { Component } from 'react'
import { Card, CardContent, CardActions, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';
import SwipeDrawer from '../../components/SwipeDrawer'
import './Archives.css'
export default class Archives extends Component {
  render() {
    return (
      <div>
        <SwipeDrawer/>
        <div className='main-archive'>
         <div className='view-archive'>
                <CardContent>
                    <Typography>tyyyyyyyy</Typography>
                    <Typography>ygugj</Typography>
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
        
        </div>
      </div>
    )
  }
}
