import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter, Routes, Route, Navigate
} from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/login/login';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Profile from './components/profile/profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='*' element={<Navigate to='/'/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Routes>
    </BrowserRouter>
</React.StrictMode>);
