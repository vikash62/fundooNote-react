import { Card, IconButton, Paper, Popper, Tooltip } from '@mui/material';
import React, { Component } from 'react'


const ColorCodeArray=[
    
    {
        rgbCode:"rgb(255,255,255)",
        ColorName:"white"
    },
     {
        rgbCode:"rgb(255,0,255)",
        ColorName:"pink"
    },
     {
        rgbCode:"rgb(255,0,0)",
        ColorName:"red"
    },
     {
        rgbCode:"rgb(0,255,0)",
        ColorName:"Lime"
    },
     {
        rgbCode:"rgb(0,0,255)",
        ColorName:"blue"
    },
     {
        rgbCode:"rgb(0,0,255)",
        ColorName:"cyan"
    },
     {
        rgbCode:"rgb(255,255,0)",
        ColorName:"yellow"
    },
]
export default class Color extends Component {
    constructor(){
        super();
        this.state={
             openColorPaper:false,
             anchorEL:'',
             colorCode:''
        }
    }
    openColorPop=(event)=>{
    this.setState({
        openColorPaper:true,
        anchorEl:event.currentTarget
    })
    }
    setColoredNote=(event,note,index)=>{
          this.setState({
            colorCode:event.target.value,
            // this.props.colorName(colorCode)
          })
    }
  render() {

    let colorPallete=ColorCodeArray.map((color)=>{
       return(
        <div className='ColorIcon'>
            <Tooltip title={color.ColorName}>
                <IconButton style={{backgroundColor:color.rgbCode}}
                value={color.rgbCode} onClick={(event)=>this.setColoredNote(event,this.props.note)}>
                </IconButton>
            </Tooltip>
        </div>
       )
    })
    return (
      <div>
        <IconButton onClick={(event)=>this.openColorPop(event)}>
            <img src={require()}/>
        </IconButton>
        <Card>
            <Popper open={this.state.open} anchorEl={this.state.anchorEL}
            position='absolute'>
                <Paper className='ColorPaper'>
                    <div className='ColorCard'>
                        {colorPallete}
                    </div>
                </Paper>
            </Popper>
        </Card>
      </div>
    )
  }
}
