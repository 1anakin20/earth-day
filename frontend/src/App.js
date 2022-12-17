import "./App.css";
import { useState } from 'react';
import Landing from "./components/landing/Landing";
import { QueryClient, QueryClientProvider } from "react-query";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';

import Register from './components/register/Register';
import NewPost from "./components/new-post/NewPost";
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import PostDetails from './components/post_details/PostDetails';

import { UserContext } from "./utilities/UserContext";

function App() {
    const [user, setUser] = useState({});
    
    const queryClient = new QueryClient();
    return (
        <UserContext.Provider value={[user, setUser]}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={
                        <Landing />
                    }/>
                    <Route path='/login' element={
                        <Login />
                    }/>
                    <Route path='register' element={
                        <Register />
                    }/>
                    <Route path='/new_post' element={
                        <NewPost />
                    }/>
                    <Route path='/post_details/:postID' element={
                        <QueryClientProvider client={queryClient}>
                            <PostDetails />
                        </QueryClientProvider>
                    }/>
                    <Route path='/profile' element={
                        <Profile />
                    }/>
                    <Route path='*' element={<Navigate to='/'/>}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
