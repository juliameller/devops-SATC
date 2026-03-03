import { useState } from "react";
import "./index.css";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  function adicionarTarefa() {
    if (!novaTarefa.trim()) return;

    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa("");
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Lista de Tarefas</h1>

        <div className="input-group">
          <input
            type="text"
            placeholder="Digite uma tarefa"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
          />

          <button onClick={adicionarTarefa}>
            Adicionar
          </button>
        </div>

        <ul>
          {tarefas.map((tarefa, index) => (
            <li key={index}>{tarefa}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;