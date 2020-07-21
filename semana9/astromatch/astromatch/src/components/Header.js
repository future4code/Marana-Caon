import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TelaMatches from "./TelaMatches"
import astromatch from "../imagens/astromatch.png"

const AppBarWrapper = styled.div`
	height: 50px;
	border-bottom: 1px solid lightgray;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	padding: 0 10px;
	flex-shrink: 0;
`

const AstromatchImage = styled.img `
    height: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`

export default function Header () {
    return (
        <AppBarWrapper>
            <AstromatchImage src={astromatch}/>
            <button>Matches</button>
        </AppBarWrapper>
    )
}