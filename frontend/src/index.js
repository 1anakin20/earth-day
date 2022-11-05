import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter, Routes, Route, Navigate
} from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/login/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='*' element={<Navigate to='/'/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </BrowserRouter>
</React.StrictMode>);
