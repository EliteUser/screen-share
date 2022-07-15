import { useState } from 'react';
import { io } from 'socket.io-client';

const SERVER = 'http://localhost:3000';
const socket = io(SERVER);

const App = () => {
  const [src, setSrc] = useState('');

  socket.on('image-message', (msg) => {
    // console.log(msg);
    setSrc(`data:image/jpeg;base64,${msg}`)
  });

  return (
    <div className="App">
      <img src={src} alt=""/>
    </div>
  );
};

export default App;
