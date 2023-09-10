import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal
} from "./styled";
import bin from "../../assets/bin.png";
import { TarefaCompleta } from "../exibição";

const listaDeTarefasInicial = [
  {
    titulo: "Fazer exercícios"
  },
  {
    titulo: "Estudar React"
  }
];

export function ListaTarefas() {
  const [lista, setLista] = useState(listaDeTarefasInicial);
  const [novaTarefa, setNovaTarefa] = useState({ titulo: "" });
  const [removed, setRemoved] = useState([]);
  const onChangeTarefa = (event) => { //função que adiciona a tarefa
    const tarefa = {
      titulo: event.target.value
    };
    setNovaTarefa(tarefa);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa({ titulo: "" });
  };

  const enter = (event) => { //função do enter
    if(event.key === 'Enter'){

      const novaTarefa = {
        titulo: event.target.value
      };
        setLista([...lista, novaTarefa]);
        console.log(novaTarefa);
        setNovaTarefa({ titulo: "" });
    }
  }

  const removeTarefa = (tarefaParaRemover) => { //função para remover
    const listaFiltrada = lista.filter(tarefa => tarefa.titulo !== tarefaParaRemover.titulo);

    setRemoved([...removed, tarefaParaRemover]);
    setLista(listaFiltrada);
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa.titulo}
          onChange={onChangeTarefa}
          onKeyDown={enter}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          <h2>Tarefas a concluir</h2>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa.titulo}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>

      </ListaContainer>
      <LinhaHorizontal />
        <TarefaCompleta lista={removed}/>
    </ListaTarefasContainer>
  );
}