import { useState } from 'react';
import { io } from 'socket.io-client';

// const SERVER = 'http://localhost:3000';
const SERVER = 'https://sh-scr.herokuapp.com';
const socket = io(SERVER);

const App = () => {
  const [src, setSrc] = useState('');

  socket.on('image-message', (msg) => {
    // console.log(msg);
    setSrc(`data:image/jpeg;base64,${msg}`)
  });

  const style = {
    maxWidth: '100vw',
    aspectRatio: 'auto'
  }

  return (
    <div className="App">
      <img src={src} style={style} alt='image'/>
    </div>
  );
};

export default App;
