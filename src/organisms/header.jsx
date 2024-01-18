import React from 'react';

import Grid from '@mui/material/Unstable_Grid2'; 
import {IconButton, ListItemText, ListItem, ListItemButton } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import ImageIcon from '@mui/icons-material/Image';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import Button from '@mui/material/Button';

import userIcon from '../assets/images/profile.jpg'

const iconStyle = { color: '#1D9BF0', fontSize: '24px'};


export default function Header() {
    return (
    <Grid container direction="column" marginTop={2}>
    <Grid item>
        <span style={{textTransform:'uppercase', fontWeight:'bold'}}>Home</span>
    </Grid>
    <Grid container display="flex" justifyContent="space-around" alignItems="center" mt={3}>
        <Grid item>
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemText primary= 'For you'/>
            </ListItemButton>
        </ListItem>
        </Grid>
        <Grid item>
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemText primary= 'Following'/>
            </ListItemButton>
        </ListItem>
        </Grid>
    </Grid>
    <Grid />
    <hr style={{width:'100%'}}/>
    <Grid item sx={{p:'15px 20px', display:'flex', alignItems:'center'}}>
        <img src={userIcon} alt="userIcon" height={30} width={30} style={{borderRadius:'20px'}}/>
        <InputBase sx={{flex:1, p:'0 10px'}} placeholder="What is happening?!"/>
    </Grid>
    <Grid item display="flex" alignItems="center">
        <Grid item ml={7}>
        <IconButton>
            <ImageIcon sx={iconStyle}/> 
        </IconButton>
        <IconButton>
            <GifBoxOutlinedIcon sx={iconStyle}/>
        </IconButton>
        <IconButton>
            <ListOutlinedIcon sx={iconStyle}/>
        </IconButton>
        <IconButton>
            <SentimentSatisfiedAltOutlinedIcon sx={iconStyle}/>
        </IconButton>
        <IconButton>
            <WorkHistoryOutlinedIcon sx={iconStyle}/>
        </IconButton>
        <IconButton>
        <FmdGoodOutlinedIcon sx={iconStyle}/>
        </IconButton>
        </Grid>
        <Grid item sx={{display: 'flex', alignItems: 'center', justifyContent:'end'}} flex={1}> 
        <Button variant="contained" sx={{width:'100px', borderRadius:'25px', bgcolor:'#87CEEB', color:'#FCFCFC' }}>Post</Button>
        </Grid>
    </Grid>
    <br />
    <hr style={{width:'100%'}}/>
    </Grid>
    
    )
}
