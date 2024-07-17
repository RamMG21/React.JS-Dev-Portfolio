import React from 'react'
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import MailIcon from '@mui/icons-material/Mail';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AnchorIcon from '@mui/icons-material/Anchor';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';

export const SidebarData = [
    {
        title:"Home",
        icon:   <AddHomeWorkIcon/>,
        link: "/home"
    },
    {
        title:"MailBox",
        icon:   <MailIcon/>,
        link: "/mail"
    },
    {
        title:"Location",
        icon:   <AddLocationAltIcon/>,
        link: "/location"
    },
    {
        title:"Account",
        icon:   <AccountCircleIcon/>,
        link: "/account"
    },
    {
        title:"Navy",
        icon:   <AnchorIcon/>,
        link: "/navy"
    },
    {
        title:"Services",
        icon:   <AirportShuttleIcon/>,
        link: "/services"
    },
    
];