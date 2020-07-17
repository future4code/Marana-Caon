import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Footer from "./Footer"
import Header from "./Header"


const MainContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 600px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 0 5px #0000000F;
`
const ProfileContainer = styled.div `
    display: flex; 
    flex-direction: column;
    margin: 0;   
`

const ImageProfile = styled.img `
    display: flex;
    flex-direction: column;
    width: 60%;
    align-self: center;  
`

export default function TelaInicial () {
    const [profiles, setProfiles] = useState({})

    const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marana-caon"

    const getProfiles = () => {
      axios.get(`${baseUrl}/person`)
      .then(response => {
        setProfiles(response.data.profile);
      })
      .catch(err => {
        console.log(err);
      });
    }

    useEffect(() => {
        getProfiles();
      }, [])

    const onClickMatch = () => {
        const body = {
            "id": profiles.id,
            "choice": true
        }
        axios.post(`${baseUrl}/choose-person`, body)
        .then(() => {
            alert("Você deu um match!")
            getProfiles()
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    const onClickUnMatch = () => {
      const body = {
          "id": profiles.id,
          "choice": false
      }
      axios.post(`${baseUrl}/choose-person`, body)
      .then(() => {
          alert("Você deu um unmatch!")
          getProfiles()
      })
      .catch(err => {
          console.log(err.message)
      })
  }


      return (
          <MainContainer>
            <Header></Header> 
            <ProfileContainer key={profiles.id}>
                <ImageProfile src={profiles.photo} alt={profiles.name} />
                <span><strong>{profiles.name}</strong>, {profiles.age}</span>
                <p>{profiles.bio}</p>
            </ProfileContainer> 
            <Footer handleMatchClick={onClickMatch} handleUnMatchClick={onClickUnMatch}></Footer>
          </MainContainer>
      );
    }

