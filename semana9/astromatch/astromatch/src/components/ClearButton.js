import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const ClearButton = styled.button`
	position: fixed;
	bottom: 5px;
	right: 5px;
`

export default function ClearButton () {

    const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marana-caon"

    const ClearMatches = () => {
        axios.put(`${baseUrl}/clear`)
        .then(response => {
        <ClearButton>Limpar swipes e matches</ClearButton>
        })
        .catch(err => {
          console.log(err);
        });
      }
}

    useEffect(() => {
        ClearMatches();
    }, [])