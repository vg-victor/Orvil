import { React } from "react";
import './style.css';

const Alugados = ({ livro }) => {

  return (
    <div className="container-livros">
      <div key={`card-livros-li-${livro.id}`} >
        <img align="left" src={livro.capa} className="capa" />
        <h1 className="titulo-livro">{livro.titulo}</h1>
        <p className="livro-autor-p">{livro.autor}</p>
        <button className="btn-devolver">
          Devolver
        </button>
      </div>
    </div>
  );
};

export default Alugados;