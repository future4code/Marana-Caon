import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const List = styled.ul`
  padding: 0 10px;
`

const ListItem = styled.li`
  position: relative;
  height: 70px;
  padding: 10px;
  display: flex;
  list-style: none;
  width: 100%;
  transition: 0.2s;
  cursor: pointer;
  
  :hover {
    background: #eee;
  }
  
  :last-child {
    border: unset;
  }
  
  :active {
			:before {
				height: 100%;
				width: 100%;
				top: 0;
    		left: 0;
    		position: absolute;
    		background-color: rgba(0, 0, 0, 0.1);
    		content: "";
			}
   }
`

export default function TelaMatches (props) {
    const [matches, setMatches] = useState([]);

    const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marana-caon"

    useEffect(() => {
        axios
        .get(`${baseUrl}/matches`)
        .then( response => {
          setMatches(response.data.matches);
          console.log(matches)
        })
        .catch( err => {
          alert(err.message);
        })
    }, []);

    return(
      <div>
        <List>
					{matches && matches.map((match) => (
						<ListItem key={match.name}>
							<img src={match.photo}/>
							<p>{match.name}</p>
						</ListItem>
					))}
				</List>
      </div>
    )
  } 