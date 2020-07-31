import React, {useState} from 'react';
import styled from "styled-components"

const HeaderContainer = styled.div `
    display: flex;
    align-items: center;
	justify-content: center;
	flex-wrap: wrap;
    border-bottom: 1px solid #e0b0ff;
    border-collapse: collapse;
    height: 55px;
    background-color: #e0b0ff;
    
`
const Input = styled.input `
    height: 25px;
    margin: 5px;
    border-radius: 10px;
`

const Select = styled.select `
    height: 31px;
    border-radius: 10px;
`

const Button = styled.button `
    height: 31px;
    margin: 5px;
    border-radius: 10px;
`

const Header = () => {
    const [tarefas, setTarefas] = useState([]);
    const [inputTarefas, setInputTarefas] = useState("");
    const [selectDias, setSelectDias] = useState("segunda")

    const adicionarTarefa = () => {

    };

    const lidaMudancaTexto = (event) => {
        setInputTarefas(event.target.value)
    }

    const lidaMudancaSelect = (event) => {
        setSelectDias(event.target.value)
    }

    return (
        <HeaderContainer>
            <Input type="text" value={inputTarefas} onChange={lidaMudancaTexto} placeholder="Tarefa" />
            <Select
                name="dias-da-semana" 
                value={selectDias} 
                id="dias-da-semana" 
                onChange={lidaMudancaSelect}>
                <option value="segunda">Segunda-feira</option>
                <option value="terca">Terça-feira</option>
                <option value="quarta">Quarta-feira</option>
                <option value="quinta">Quinta-feira</option>
                <option value="sexta">Sexta-feira</option>
                <option value="sábado">Sábado</option>
                <option value="domingo">Domingo</option>
            </Select>
            <Button onClick={adicionarTarefa}>Criar tarefa</Button>   
        </HeaderContainer>
    );
}

export default Header;
