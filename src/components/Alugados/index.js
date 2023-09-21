import { React } from "react";
import './style.css';

const Alugados = ({ livro }) => {

  return (
    <div className="container-livros">
      <div key={`card-livros-li-${livro.id}`} className="livros">
        <img align="left" src={livro.capa} className="capa" />
        <h1>{livro.titulo}</h1>
        <p className="livro-autor-p">{livro.autor}</p>
        <p>Editora: {livro.editora}</p>
        <p>Lançamento: {livro.ano}</p>
        <p>Edição: {livro.edicao}</p>
        <p>Gênero: {livro.genero}</p>
      </div>
    </div>
  );
};

export default Alugados;