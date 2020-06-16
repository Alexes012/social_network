import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogContainer from "./components/Dialogs/DialogContainer";
import {BrowserRouter, Route} from "react-router-dom"
import UsersContainer from "./components/Users/UsersContainer";


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
                </div>
            </div>
        </BrowserRouter>);
};

export default App;
