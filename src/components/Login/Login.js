import React from "react";
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../helpComponents/formsControls/FormsControls";

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
                <Field placeholder={"Логин"} component={Input} name={"login"} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Пароль"} component={Input} name={"password"} validate={[required]}/>
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

const LoginReduxForm = reduxForm ({form: 'login'}) (LoginForm);

export default Login