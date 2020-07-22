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

const Input = styled.input`
    display: flex;
    width: 200px;
    height: 30px;
    align-self: center;
`

const Button = styled.button `
    display: flex;
    width: 100px;
    align-self: center;
    justify-content: center;
    padding: 10px;
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
      <h1>Login</h1>
      <Input value={email} onChange={onChangeEmail} placeholder="email" />
      <Input value={password} onChange={onChangePassword} placeholder="senha" />
      <Button onClick={handleLogin}>Login</Button>
      </BodyContainer>
    </PageContainer>
  );
}

export default LoginPage;