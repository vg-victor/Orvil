import { React, useEffect, useState } from "react";
import './style.css';
import api from "../../services/api";

const Alugados = ({ livro, registro, load, leitorAtualId }) => {
  const [action, setAction] = useState("", {})

  useEffect(() => {
    if (action[0] === "devolver") {
      devolucao();
    }
  }, [action])

  const devolucao = async () => {
    await api.post(`registros/devolucao/${registro.id}`)
    load(leitorAtualId);
  }

  return (
    <div key={`card-livros-li-${livro.id}`} className="container-livros-alugados">
      <img align="left" src={livro.capa} className="capa" />
      <h1 className="titulo-livro">{livro.titulo}</h1>
      <p className="livro-autor-p">{livro.autor}</p>
      <button className="btn-devolver" onClick={() => setAction(["devolver", livro])}>
        Devolver
      </button>
    </div>
  );
};

export default Alugados;