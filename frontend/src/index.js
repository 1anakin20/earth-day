import React from 'react';
import ReactDOM from 'react-dom/client';
// import {
//     BrowserRouter,
//     Routes,
//     Route,
//     Navigate
// } from 'react-router-dom';
import './index.css';

import App from './App';
// import Register from './components/register/Register';
// import NewPost from "./components/new-post/NewPost";
// import Login from './components/login/login';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import Profile from './components/profile/profile';
// import PostDetails from './components/post_details/PostDetails';
// import {QueryClient, QueryClientProvider} from "react-query";

const root = ReactDOM.createRoot(document.getElementById('root'));
// const queryClient = new QueryClient();
root.render(
    <React.StrictMode>
        <App/> 
    </React.StrictMode>
);
