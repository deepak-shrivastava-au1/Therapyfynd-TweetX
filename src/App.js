import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Navibar from './Components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './Components/Profile';
import Following from './Components/Details/Following';
import Posts from './Components/Details/Posts';
import Followers from './Components/Details/Followers';
import Users from './Components/Users';

function App() {
  return (
    <BrowserRouter > 
        <Navibar />
        <Route exact path='/' component = {SignUp} />
        <Route path='/login' component = {Login} />
        <Route path='/profile' component = {Profile} />
        <Route path='/following' component = {Following} />
        <Route path='/posts' component = {Posts} />
        <Route path='/followers' component = {Followers} />
        <Route path='/users' component = {Users} />
    </BrowserRouter>
  );
}

export default App;
