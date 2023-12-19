import React from 'react'
import {Avatar}  from '@mui/material';
import '../styles/sidebarchat.css'

function SidebarChat() {
  return (
    <div className="sidebarchat">
        <Avatar/>
        <div className="sidebarchat__info">
            <h2>Room name</h2>
            <p>Last Message</p>
        </div>
    </div>
  )
}

export default SidebarChat