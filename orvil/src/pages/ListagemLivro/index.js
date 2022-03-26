import React, { useState } from "react";
import { useMatch } from "react-router-dom";
import "./style.css";

const ListagemLivro = () => {
  const [livros, setLivros] = useState([]);

  const teste = [
    {
      id: 1,
      capa: "https://images-na.ssl-images-amazon.com/images/I/91YQ3e1VNKL.jpg",
      titulo: "Cristianismo puro e simples",
      autor: "C. S. Lewis",
      editora: "Thomas Nelson Brasil",
      ano: "2017",
      edicao: "1ª",
      genero: "1. Cristianismo. 2. Vida cristã.",
    },
    {
      id: 2,
      capa: "https://images-na.ssl-images-amazon.com/images/I/71y-4dpFyHL.jpg",
      titulo: "Jogador Número Um",
      autor: "Ernest Cline",
      editora: "Intrínseca",
      ano: "2021",
      edicao: "1ª",
      genero: "1. Ficção científica.",
    },
  ];

  return (
    <body className="body-livro">
      <ul className="div-livro-listagem">
        {teste.map((livro) => (
          <li key={`card-livros-li-${livro.id}`} className="livros">
            <img align="left" src={livro.capa} />
            <h1>{livro.titulo}</h1>
            <p className="livro-autor-p">{livro.autor}</p>
            <p>Editora: {livro.editora}</p>
            <p>Lançamento: {livro.ano}</p>
            <p>Edição: {livro.edicao}</p>
            <p>Gênero: {livro.genero}</p>
          </li>
        ))}
      </ul>
    </body>
  );
};

export default ListagemLivro;
