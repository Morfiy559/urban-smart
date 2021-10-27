import React from "react";
import './Main.css';
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {setValid, setFormLogin, setFormPass} from "../../redux/auth-reducer";

const Main = ({login, pass,valid, setFormLogin, setFormPass,setValid}) => {
    const history = useHistory();
    const onSubmit = (e) => {
        e.preventDefault();
        history.push('/profile')
    }
    const setLogin = (e) => {
        let login = e.target.value;
        setFormLogin(login);
        setValid()
    }
    const setPass = (e) => {
        let pass = e.target.value;
        setFormPass(pass)
        setValid()
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <label>Login: <input onChange={setLogin} type="text" value={login}/></label>
                <label>Pass: <input onChange={setPass} type="password" value={pass}/></label>
                <button disabled={!valid}>Войти</button>
            </form>
            <div>Login: {login}</div>
            <div>Pass: {pass}</div>
        </>

    )
}

const mapStateToProps = (state) => {
    return {
        login: state.formLogin,
        pass: state.formPass,
        valid: state.valid,
    }

}

export default connect(mapStateToProps, {setFormLogin, setFormPass,setValid})(Main);