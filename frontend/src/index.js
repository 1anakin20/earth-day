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
import Register from './components/register/Register';
import NewPost from "./components/new-post/NewPost";
import Login from './components/login/login';
import PostDetails from './components/post_details/PostDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='register' element={<Register />} />
        <Route path='/new_post' element={<NewPost />}/>
        <Route path='/post_details' element={<PostDetails />}/>
        <Route path='/' element={<App/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
