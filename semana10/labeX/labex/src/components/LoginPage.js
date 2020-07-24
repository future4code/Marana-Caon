import React, { useState } from 'react';
import { useHistory } from "react-router";
import Header from "./Header";
import styled from "styled-components";
import axios from "axios";

const PageContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
`

const BodyContainer = styled.div`
    display: flex;
    height: 80vh;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`

const Title = styled.h3 `
    color: white;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    display: flex;
    width: 200px;
    height: 30px;
    align-self: center;
    margin: 5px;
`

const Button = styled.button `
    display: flex;
    width: 100px;
    align-self: center;
    justify-content: center;
    padding: 10px;
    border-radius: 15px;
    border: none;

    :hover {
        border: 2px solid #C016A8;
    }
`
const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/marana-caon";

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const onChangeEmail = e => {
        setEmail(e.target.value);
    };

    const onChangePassword = e => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        const body = {
          email: email,
          password: password
        };
    
        axios
          .post(`${baseUrl}/login`, body)
          .then(response => {
            window.localStorage.setItem("token", response.data.token);
            history.push("/admin");
          })
          .catch(err => {
            alert("Usuário ou senha incorretos!")
            console.log(err.message);
          });
      };


return (
    <PageContainer>
      <Header />
      <BodyContainer>
      <Title>Login</Title>
      <Form>
        <Input 
          value={email} 
          onChange={onChangeEmail} 
          placeholder="email" 
          type="email"
        />
        <Input 
          value={password} 
          onChange={onChangePassword} 
          placeholder="senha"
          type="password"
        />
      </Form>
      <Button onClick={handleLogin}>Entrar</Button>
      </BodyContainer>
    </PageContainer>
  );
}

export default LoginPage;