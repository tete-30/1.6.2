import "./styles.css";
import { useState } from "react";

export default function App() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const onAdicionar = (event) => {
    setTarefa(event.target.value);
  };

  const onClick = () => {
    setTarefas([...tarefas, tarefa]);
  };

  return (
    <div className="App">
      <input onChange={onAdicionar} />
      <button onClick={onClick}>Adicionar</button>
      {tarefas.map((tarefa) => (
        <div>
          <span>{tarefa}</span>
          <button
            onClick={() => {
              setTarefas(tarefas.filter((tarefa_) => tarefa_ !== tarefa));
            }}
          >
            Excluir
          </button>
        </div>
      ))}
    </div>
  );
}
