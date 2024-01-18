import React from 'react'

import { Avatar, Box, List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PendingIcon from '@mui/icons-material/Pending';
import Button from '@mui/material/Button';

import logo from '../assets/images/logo-twitter.png'

const MARGIN_ICON = {mr: '8px', ml:'48px'}
const ICON_BG = {
    color: '#0F1419'
}

export default function Menu() {
  return (
    <Box sx={{bgcolor:'#fff', p:'12px'}} >
        <ListItem disablePadding>
            <ListItemButton>
                <Avatar src={logo} sx={{ml:'40px'}}/>
            </ListItemButton>
        </ListItem>
        <List item sx={{display:'flex', flexDirection:'column'}}>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <HomeIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Home'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <SearchIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Explore'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <NotificationsNoneIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Notifications'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <MailOutlineIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Messages'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <ListAltIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Lists'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <PeopleOutlineIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Communities'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <Avatar src={logo} sx={{ml:'40px'}}/>
                    <ListItemText primary= 'Premium'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <PermIdentityIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'Profile'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={ICON_BG}>
                    <PendingIcon sx={MARGIN_ICON}/>
                    <ListItemText primary= 'More'/>
                </ListItemButton>
            </ListItem>
        </List>
        <Box sx={{display:'flex', justifyContent:'flex-end'}}>
        <Button variant="contained" sx={{width:'170px', borderRadius:'25px', bgcolor:'#1D9BF0', color:'#FCFCFC' }}>Post</Button>
        </Box>
    </Box>
  )
}
