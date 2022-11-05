import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import './index.css';
import App from './App';
import NewPost from "./components/new-post/NewPost";
import Login from './components/login/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/new_post' element={<NewPost />}/>
            <Route path='/' element={<App/>}/>
            <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
