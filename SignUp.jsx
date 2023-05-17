import React, { useState } from "react";
import './SignUp.css'; 
import {FormGroup, Label} from 'reactstrap';

export const SignUp = (props) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [telefone, setTelefone] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [complemento, setComplemento] = useState('');
    const [uf, setUf] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');
    const [tipoDeCliente, setTipoDeClinte] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="auth-form-container">
            <form inline onSubmit={handleSubmit}>
            <h2>Cadastrar</h2>
            <FormGroup>
               <Label for="name">Nome</Label>
               <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" />
            </FormGroup>
            <FormGroup>
               <Label for="telefone">Telefone</Label>
               <input value={telefone} onChange={(e) => setTelefone(e.target.value)} type="telefone" id="telefone" name="telefone" />
            </FormGroup>
            <FormGroup>
               <Label for="email">Email</Label>
               <input value={email} name="email" onChange={(e) => setEmail(e.target.value)} id="email" />
            </FormGroup>
            <FormGroup>
               <Label for="logradouro">Logradouro</Label>
               <input value={logradouro} onChange={(e) => setLogradouro(e.target.value)} type="logradouro" id="logradouro" name="logradouro"/>
            </FormGroup>
            <FormGroup>
               <Label for="complemento">Complemento</Label>
               <input value={complemento} name="complemento" onChange={(e) => setComplemento(e.target.value)} id="complemento" />
            </FormGroup>
            <FormGroup>
               <Label for="uf">UF</Label>
               <input value={uf} onChange={(e) => setUf(e.target.value)} type="Uf" id="Uf" name="UF" />
            </FormGroup>
            <FormGroup>
               <Label for="cidade">Cidade</Label>
               <input value={cidade} name="cidade" onChange={(e) => setCidade(e.target.value)} id="cidade" />
            </FormGroup>
            <FormGroup>
               <Label for="cep">cep</Label>
               <input value={cep} onChange={(e) => setCep(e.target.value)} type="cep" id="cep" name="cep" />
            </FormGroup>
            <FormGroup>
          <Label for="tipo de cliente">Tipo de cliente</Label>
          <select value={tipoDeCliente} onChange={(e) => setTipoDeClinte(e.target.value)} id="tipoDeCliente" name="tipoDeCliente">
             <option>Padrão</option>
            <option>Preferencial</option>
          </select>
        </FormGroup>
            <FormGroup>
            <button type="submit">Cadastrar</button>
            </FormGroup>
            </form>
        </div>
    )
}


