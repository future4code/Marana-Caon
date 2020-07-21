import React from 'react';
import { useHistory } from "react-router";
import styled from "styled-components"
import HomeIcon from "../imagens/home.png"
import LoginIcon from "../imagens/login.png"


const HeaderContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 7vh;
    background-color: #C016A8;
    padding: 0px 15px;
    width: 98%;
    position: absolute;
`
const ButtonHome = styled.button`
    padding: 0;
    border: none;
    background: none;

    :focus { 
        outline: none; 
    }
`

const IconHome = styled.img`
    height: 40px;
`

const ButtonLogin = styled.button`
    padding: 0;
    border: none;
    background: none;

    :focus { 
        outline: none; 
    }
`

const IconLogin = styled.img`
    height: 30px;
`

const LabeX = styled.p`
    font-size: 25px;
`

const Header = () => {
    const history = useHistory();

    const goToLoginPage = () => {
        history.push("/login");
      };

    const goToHomePage = () => {
        history.push("/");
  };

return (
    <HeaderContainer>
      <ButtonHome onClick={goToHomePage}>
          <IconHome src={HomeIcon} />
      </ButtonHome>
      <LabeX><strong>LabeX</strong></LabeX>
      <ButtonLogin onClick={goToLoginPage}>
          <IconLogin src={LoginIcon} />
      </ButtonLogin>
    </HeaderContainer>
  );
}

export default Header;