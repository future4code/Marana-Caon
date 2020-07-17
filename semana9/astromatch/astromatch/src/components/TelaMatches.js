import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TelaMatches (props) {
    const [myMatches, setMyMatches] = useState([]);

    const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marana-caon"

    useEffect(() => {
        axios
        .get(`${baseUrl}/matches`)
        .then( response => {
          setMyMatches(response.data.matches);
          console.log(myMatches)
        })
        .catch( err => {
          alert(err.message);
        })
    }, []);

    return(
      <div>
        <div>
          {myMatches.map(match => {
            return(
              <div key={match.id}>
                <img src={match.photo} alt={match.name} />
                <span>{match.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  } 