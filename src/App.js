import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogContainer from "./components/Dialogs/DialogContainer";
import {BrowserRouter, Route, withRouter} from "react-router-dom"
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {inisializeApp} from "./redux/app-reducer";
import Preloader from "./components/helpComponents/preloader";



class App extends React.Component {

    componentDidMount() {
        this.props.inisializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

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
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose (
    withRouter,
    connect (mapStateToProps, {inisializeApp})) (App);
