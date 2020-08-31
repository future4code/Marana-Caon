import React from 'react';
import styled from 'styled-components';
import FlorDireita from '../assets/img/florzinhas-direita.png'
import FlorEsquerda from '../assets/img/florzinhas-esquerda.png'

const MainContainer = styled.div `
    background-color: honeydew;
    text-align: center;
`

const PlannerContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
`
const Title = styled.div `
    display: flex;
    flex-direction: row;
    margin: 15px 0px; 
`
const Flor = styled.img `
    width: 40%;
`

const Table = styled.table `
    border: 1px solid black;
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
`
const TableRow = styled.tr `
    border: 1px solid black;
    text-align: center;
`

const TableHead = styled.th `
    border: 1px solid black;
    text-align: center;
    background-color: #e0b0ff;
`
const TableDiv = styled.td `
    border: 1px solid black;
    height: 300px;
    text-align: center;
`

const Planner = (props) => {
    console.log(props.listaDeTarefas)
 return (
     <MainContainer>
        <Title>
            <Flor src={FlorEsquerda} alt="Flores à esquerda do título"/>
            <h2>Planejamento semanal</h2>
            <Flor src={FlorDireita} alt="Flores à direita do título" />
        </Title>
        <PlannerContainer>
                    <Table>
                        <TableRow>
                            <TableHead>Segunda</TableHead>
                            <TableHead>Terça</TableHead>
                            <TableHead>Quarta</TableHead>
                            <TableHead>Quinta</TableHead>
                            <TableHead>Sexta</TableHead>
                            <TableHead>Sábado</TableHead>
                            <TableHead>Domingo</TableHead>
                        </TableRow> 
                        <TableRow>
                            <TableDiv>
                                <ul value="domingo">
                                {/* {props.listaDeTarefas.map((tarefa) => {
                                return {tarefa.segunda} */}
                                </ul>
                            </TableDiv>
                            <TableDiv><ul value="segunda"></ul></TableDiv>
                            <TableDiv><ul value="terca"></ul></TableDiv>
                            <TableDiv><ul value="quarta"></ul></TableDiv>
                            <TableDiv><ul value="quinta"></ul></TableDiv>
                            <TableDiv><ul value="sexta"></ul></TableDiv>
                            <TableDiv><ul value="sabado"></ul></TableDiv>
                        </TableRow>            
                    </Table>



            {/* <DiasContainer>
                <Dia>Segunda-feira</Dia>
                {props.listaDeTarefas.map((tarefa) => {
                    return <Tarefas>{tarefa.segunda}</Tarefas>     
                })}
            </DiasContainer>
            <DiasContainer>
                <Dia>Terça-feira</Dia>
                {props.listaDeTarefas.map((tarefa) => {
                    return <Tarefas>{tarefa.terça}</Tarefas>     
                })}
            </DiasContainer>
            <DiasContainer>
                <Dia>Quarta-feira</Dia>
                {props.listaDeTarefas.map((tarefa) => {
                    return <Tarefas>{tarefa.quarta}</Tarefas>     
                })}
            </DiasContainer>
            <DiasContainer>
                <Dia>Quinta-feira</Dia>
                {props.listaDeTarefas.map((tarefa) => {
                    return <Tarefas>{tarefa.quinta}</Tarefas>     
                })}
            </DiasContainer>
            <DiasContainer>
                <Dia>Sexta-feira</Dia>
                {props.listaDeTarefas.map((tarefa) => {
                    return <Tarefas>{tarefa.sexta}</Tarefas>     
                })}
            </DiasContainer>
            <DiasContainer>
            <p>Sábado</p>
                {props.listaDeTarefas.map((tarefa) => {
                    return <Tarefas>{tarefa.sábado}</Tarefas>     
                })}
            </DiasContainer>
            <DiasContainer>
            <p>Domingo</p>
                {props.listaDeTarefas.map((tarefa) => {
                    return <Tarefas>{tarefa.domingo}</Tarefas>     
                })}
            </DiasContainer> */}
        </PlannerContainer>
     </MainContainer>
 );
}

export default Planner;