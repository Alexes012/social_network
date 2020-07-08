import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogContainer from "./components/Dialogs/DialogContainer";
import {BrowserRouter, Route} from "react-router-dom"
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogContainer/>}/>

                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>

                    <Route path='/users'
                           render={() => <UsersContainer/>}/>

                    <Route path='/login'
                           render={() => <Login/>}/>
                </div>
            </div>
        </BrowserRouter>);
};

export default App;
