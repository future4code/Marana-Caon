import React from 'react';
import styled from 'styled-components';
import Axios from 'axios'

const PlannerContainer = styled.div `
    display: flex;
    flex-direction: row;
`

const Dias = styled.div `
    border-right: 1px solid #e0b0ff;
`
const Planner = (props) => {
    console.log(props.listaDeTarefas)
 return (
     <PlannerContainer>
         {props.listaDeTarefas.map((tarefa) => {
             return <Dias>{tarefa.texto}</Dias>
             <Dias>{tarefa.texto}</Dias>
             <Dias>{tarefa.texto}</Dias>
             <Dias>{tarefa.texto}</Dias>
             <Dias>{tarefa.texto}</Dias>
             <Dias>{tarefa.texto}</Dias>
             <Dias>{tarefa.texto}</Dias>       
         })}
     </PlannerContainer>
 )
}

export default Planner;