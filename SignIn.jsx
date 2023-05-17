import React, { useState } from "react";
import {FormGroup} from 'reactstrap';
import './SignIn.css'; 


export const SignIn = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Entrar</h2>
            <form inline onSubmit={handleSubmit}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <label for="exampleEmail" className="mr-sm-2">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email"  id="email" name="email" />
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <label htmlFor="password">Senha</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password"  id="password" name="password" />
            </FormGroup>
            <FormGroup>
                <button className="link-btn" onClick={() => props.onFormSwitch('signUp')}>Não é cadastrado?Se cadastre.</button>
                <button type="submit">Entrar</button>
            </FormGroup>
            </FormGroup>
            </form>   
        </div>
    )
}



