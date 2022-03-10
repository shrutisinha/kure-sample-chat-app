import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import UsersList from './components/UsersList';
import Chat from './components/Chat';
import SendbirdChat from './components/SendbirdChat';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/:currentId/list" element={<UsersList />} />
          <Route path="/:currentId/chat/:otherId" element={<Chat />} />
          <Route path="/:currentId/sendbird" element={<SendbirdChat />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
