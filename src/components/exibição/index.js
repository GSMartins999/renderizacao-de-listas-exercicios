import styled from "styled-components";
import {  InputContainer,
    ListaContainer,
    ListaTarefasContainer,
    Tarefa,
    TaskInput,
    AddTaskButton,
    RemoveButton,
    LinhaHorizontal} from "../ListaTarefas/styled";
import bin from "../../assets/bin.png";

export const Div = styled.div`
    width: 100%;
    height: 100vh;

`;

export const TarefaCompleta = ({lista}) => {

    console.log(lista);
    const listaNova = lista;

    return (
        <>
            <ListaContainer>
                <ul>
                    <h2>Tarefas Concluidas</h2>
                {listaNova.map((item) => 
                (<Tarefa key={item.titulo}>
                    <p>{item.titulo}</p>
                </Tarefa>))}
                </ul>
            </ListaContainer>
        </>
    )
}