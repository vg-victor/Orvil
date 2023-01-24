import React from "react";
import "./style.css";

export default ({
  livros,
  mostrarAcoes = false,
  action,
  setAction = () => {},
}) => {
  return livros.map((livro) => (
    <li key={`card-livros-li-${livro.id}`} className="livros">
      <img align="left" src={livro.capa} />
      <h1>{livro.titulo}</h1>
      <p className="livro-autor-p">{livro.autor}</p>
      <p>Editora: {livro.editora}</p>
      <p>Lançamento: {livro.ano}</p>
      <p>Edição: {livro.edicao}</p>
      <p>Gênero: {livro.genero}</p>
      {livro?.alugado && (
        <p
          className="alugado"
          style={{
            color: "#343e3d",
          }}
        >
          ALUGADO
        </p>
      )}
      {mostrarAcoes && (
        <select
          className="livro-select"
          value={action}
          onChange={(e) => setAction([e.target.value, livro])}
        >
          <option>Ações</option>
          <option
            value="editar"
            style={{
              textAlign: "center",
              backgroundColor: "blue",
              color: "#aedcc0",
            }}
          >
            Editar
          </option>
          <option
            value="excluir"
            style={{
              textAlign: "center",
              backgroundColor: "red",
              color: "#aedcc0",
            }}
          >
            Excluir
          </option>
          {!livro?.alugado && (
            <option value="alugar">Alugar</option>)}
        </select>
      )}
    </li>
  ));
};
