import { React, useEffect, useState } from 'react';
import '../src/styles/App.css';
import Chat from './components/chat';
import Sidebar from './components/sidebar';
import Pusher from 'pusher-js';
import axios from './axios'

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync').then(response =>{
      setMessages(response.data)
    }).catch((error) => {
      // Handle error if necessary
      console.error('Error fetching data:', error);
    });
  })
  useEffect(() =>{
    const pusher = new Pusher('e494c75932e29f5f8561', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('message');
    channel.bind('inserted', (data) => {
      // alert(JSON.stringify(data));
      setMessages([...messages, data])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  // console.log(messages)

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar/>
        <Chat messages={messages}/>
      </div>
      

    </div>
  );
}

export default App;
