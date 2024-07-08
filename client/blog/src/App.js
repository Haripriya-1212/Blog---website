// import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Blogpost from './component/Blogpost';
import {Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { UserContextProvider } from './UserContext';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route  path='/' element={<Layout/>}>
          <Route index element={<IndexPage/> }></Route>

          <Route path={'/login'} element={<LoginPage/>}></Route>

          <Route path={'/register'} element={<RegisterPage/>}></Route>
          <Route path={'/create'} element={<CreatePost/>}></Route>
          <Route path={'/post/:id'} element={<PostPage/>}></Route>
        </Route>
      </Routes>
    </UserContextProvider>
    
  );
}

export default App;
