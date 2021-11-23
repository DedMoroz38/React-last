import './App.css';
import { Messager } from './routes/messanger';
import Profile from './routes/profile';
import { GistsList } from './routes/gits2'
import { Routes, Route } from 'react-router-dom';
import { Signup } from './routes/Signup';
import { Login } from './routes/login';
import PrivateRoute from './hocs/PrivateRoute';
import firebase from 'firebase';
import { useState, useEffect } from 'react';
import MessageFieldContainer from './components/messagesList/new.js'

function App() {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    })
  }, []);

  return (
    <Routes>
      <Route path="/gits" element={<GistsList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/new" element={<MessageFieldContainer />} />
      <Route path="/profile" element={
        <PrivateRoute authorization={authed}>
          <Profile />
        </PrivateRoute>
      }
      />
      <Route path="/*" element={
        <PrivateRoute authorization={authed}>
          <Messager />
        </PrivateRoute>
      }
      />
    </Routes >
  );
}

export default App;
