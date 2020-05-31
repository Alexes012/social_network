import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogContainer from "./components/Dialogs/DialogContainer";
import {BrowserRouter, Route} from "react-router-dom"


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() =>
                               <DialogContainer store={props.store}
                               />}
                    />
                    <Route path='/profile'
                           render={() =>
                               <Profile
                                   store={props.store}
                               />}
                    />
                </div>
            </div>
        </BrowserRouter>);
};

export default App;
