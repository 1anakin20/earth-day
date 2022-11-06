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
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Profile from './components/profile/profile';
import PostDetails from './components/post_details/PostDetails';
import {QueryClient, QueryClientProvider} from "react-query";

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
root.render(<React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='register' element={<Register/>}/>
                <Route path='/new_post' element={<NewPost/>}/>
                <Route path='/post_details/:postID' element={
                    <QueryClientProvider client={queryClient}>
                        <PostDetails />
                    </QueryClientProvider>
                }/>
                <Route path='/' element={<App/>}/>
                <Route path='*' element={<Navigate to='/'/>}/>
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
