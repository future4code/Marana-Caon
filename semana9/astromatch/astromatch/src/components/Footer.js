import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const ButtonMatch = styled.button `
    width: 80px;
    height: 80px;
    color: green;
    font-size: 50px;
    transform: scale(0.7);
    position: relative;
    box-shadow: rgba(205, 205, 205, 0.73) 0px 0px 15px 0px;
    border-radius: 50%;
    border-width: 1px;
    border-style: solid;
    border-color: green;
    border-image: initial;
    transition: all 0.2s ease 0s;
    overflow: hidden;
`
const PassButton = styled.button `
    width: 80px;
    height: 80px;
    color: red;
    font-size: 50px;
    transform: scale(0.7);
    position: relative;
    box-shadow: rgba(205, 205, 205, 0.73) 0px 0px 15px 0px;
    border-radius: 50%;
    border-width: 1px;
    border-style: solid;
    border-color: red;
    border-image: initial;
    transition: all 0.2s ease 0s;
    overflow: hidden;
`
const HeaderContainer = styled.div `
    display: flex;
    justify-content: space-evenly;
    -webkit-box-align: center;
    align-items: center;
    padding: 10px 0px;
`
export default function Footer (props) {
    return (
        <HeaderContainer>
            <PassButton onClick={props.handleUnMatchClick}>X</PassButton>
            <ButtonMatch onClick={props.handleMatchClick}>♥️</ButtonMatch>
        </HeaderContainer>
    )
}