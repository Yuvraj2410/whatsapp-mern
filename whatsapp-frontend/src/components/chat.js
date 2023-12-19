import React, { useState } from 'react'
import '../styles/chat.css'
import {Avatar, IconButton}  from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import axios from '../axios.js';

function Chat({messages}) {

    const [input,setInput] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post('/messages/new', {
            message: input,
            name: 'Spike Spiegel',
            timestamp: 'just now',
            received: false
        })

        setInput('');
    }
  return (
    <div className='chat'>
        <div className="chatheader">
            <Avatar/>
            <div className="chat_headercontent">
                <h3>Chat with ...</h3>
                <p>date, time</p>
            </div>
            <div className="chat_headerright">
                <IconButton><SearchIcon/></IconButton>
                <IconButton><AttachFileIcon/></IconButton>
                <IconButton><MoreVertIcon/></IconButton>
            </div>
        </div>

        <div className="chat_body">
            {messages.map((message) => (
                <p  className={`chat_message ${!message.received && "chat_reciever"}`}>
                <span className='chat_name'>{message.name}</span>
                {message.message}
                <span className='chat_timestamp'>{message.timestamp}</span>
            </p>
            ))}
            
        </div>

        <div className="chat_footer">
            <InsertEmoticonIcon/>
            <form>
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Type a message' type='text' />
                <button onClick={sendMessage} type='submit'>send a message</button>
            </form>
            <MicIcon/>
        </div>
    </div>
  )
}

export default Chat