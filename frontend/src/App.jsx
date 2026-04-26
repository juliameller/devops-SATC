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

  function pressionarEnter(e) {
    if (e.key === "Enter") {
      adicionarTarefa();
    }
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
            onKeyDown={pressionarEnter}
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

        <footer
          style={{
            textAlign: "center",
            marginTop: "20px",
            padding: "10px",
            fontSize: "14px",
            color: "#666",
          }}
        >
          © 2026 Julia Meller
        </footer>
      </div>
    </div>
  );
}

export default App;