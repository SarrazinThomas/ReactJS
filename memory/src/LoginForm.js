import React from 'react'

const LoginForm = ({fctClick}) => (
    <div className="loginBox">
        <label>Login : </label><input  id="login" type="text"/><br />
        <label>MDP   : </label><input id="mdp" type="text"/><br />
        <button id="valid" type="button" onClick={() => fctClick('root')} >Connexion</button>
    </div>
)

export default LoginForm