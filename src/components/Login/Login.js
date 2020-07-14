import React from "react";
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../helpComponents/formsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Авторизация</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

};

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Почта"} component={Input} name={"email"} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Пароль"} component={Input} name={"password"} type={"password"}
                       validate={[required]}/>
            </div>
            <div>
                <Field component={Input} type={"checkbox"} name={"rememberMe"} validate={[required]}/> запомнить меня
            </div>
            <div>
                <button>Авторизоваться</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login)