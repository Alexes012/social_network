import React from "react";
import {Field, reduxForm} from "redux-form";

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log (formData)
    };

    return (
        <div>
            <h1>Авторизация</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Логин"} component={"input"} name={"login"}/>
            </div>
            <div>
                <Field placeholder={"Пароль"} component={"input"} name={"password"}/>
            </div>
            <div>
                <Field component={"input"} type={"checkbox"} name={"rememberMe"}/> запомнить меня
            </div>
            <div>
                <button>Авторизоваться</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm ({form: 'login'}) (LoginForm);

export default Login