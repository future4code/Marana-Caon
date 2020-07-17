import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function ClearButton () {

    const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marana-caon"
    
    const ClearMatches = () => {
        axios.put(`${baseUrl}/clear`)
        .then(response => {
          setProfiles(response.data.profile);
        })
        .catch(err => {
          console.log(err);
        });
      }
}

    useEffect(() => {
        ClearMatches();
    }, [])