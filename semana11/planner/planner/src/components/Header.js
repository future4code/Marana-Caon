import React, {useState} from 'react';
import styled from "styled-components";
import axios from 'axios';

const HeaderContainer = styled.div `
    display: flex;
    align-items: center;
	justify-content: center;
	flex-wrap: wrap;
    border-bottom: 1px solid #e0b0ff;
    border-collapse: collapse;
    height: 55px;
    background-color: #e0b0ff;
    font-family: 'Crafty Girls', cursive;
    
`
const Input = styled.input `
    height: 30px;
    margin: 5px;
    
`

const Select = styled.select `
    height: 31px;
    
`

const Button = styled.button `
    height: 31px;
    margin: 5px;
`

const Header = () => {
    const [inputTasks, setInputTasks] = useState("");
    const [selectDias, setSelectDias] = useState("segunda")

    const onChangeInput = (event) => {
        setInputTasks(event.target.value)
    }
    
    const createTask = async () => {
    setInputTasks('')

        const body = {
          text: inputTasks,
          day: selectDias,
        }
    
        await axios.post('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-marana-caon', body)
        
      }
    
    //   const editTask = (tarefa) => {
    
    //     axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-marana-caon/:taskId`).then(() => {
    //       getTasks()
    //     })
    //   }

    const onChangeSelect = (event) => {
        setSelectDias(event.target.value)
    }

    return (
        <HeaderContainer>
            <Input type="text" value={inputTasks} onChange={onChangeInput} placeholder="Tarefa" />
            <Select
                name="dias-da-semana" 
                value={selectDias} 
                id="dias-da-semana" 
                onChange={onChangeSelect}>
                <option value="segunda">Segunda-feira</option>
                <option value="terca">Terça-feira</option>
                <option value="quarta">Quarta-feira</option>
                <option value="quinta">Quinta-feira</option>
                <option value="sexta">Sexta-feira</option>
                <option value="sabado">Sábado</option>
                <option value="domingo">Domingo</option>
            </Select>
            <Button onClick={createTask}>Criar tarefa</Button>   
        </HeaderContainer>
    );
}

export default Header;
