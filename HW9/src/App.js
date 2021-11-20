import './App.css';
import { Messager } from './routes/messanger';
import Profile from './routes/profile';
import { GistsList } from './routes/gits2'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/*" element={<Messager />} />
      <Route path="/gits" element={<GistsList />} />
    </Routes >
  );
}

export default App;
