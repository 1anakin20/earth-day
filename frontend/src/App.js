import "./App.css";
import Landing from "./components/landing/Landing";
import {QueryClient, QueryClientProvider} from "react-query";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';

import Register from './components/register/Register';
import NewPost from "./components/new-post/NewPost";
import Login from './components/login/login';
import Profile from './components/profile/profile';
import PostDetails from './components/post_details/PostDetails';

function App() {
    const queryClient = new QueryClient();
    return (
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
                <Route path='/' element={<Landing />}/>
                <Route path='*' element={<Navigate to='/'/>}/>
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
