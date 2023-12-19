import React from 'react'
import '../styles/sidebar.css'
import MessageIcon from '@mui/icons-material/Message';
import { Avatar,IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './sidebarchat';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar__header">
            <Avatar src="D:\code\Web Development\whatsapp-mern\src\static\cowboy-bebop.jpg"/>
            <div className="sidebar__headerright">
                <IconButton>
                    <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                    <MessageIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>   
            </div>
        </div>

        <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                <SearchIcon/>
                <input placeholder='Search your chat' type='text'/>
            </div>
        </div>

        <div className="sidebar__chat">
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
        </div>
    </div>
  )
}

export default Sidebar