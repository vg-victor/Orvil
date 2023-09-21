import React from "react";
import "./style.css";

export default ({
  livros,
  mostrarAcoes = false,
  setAction = () => { },
}) => {
  return livros.map((livro) => (
    <div className="container-listagem-livros">
      <div key={`card-livros-li-${livro.id}`} className="livros">
        <div className="capa">
          <img src={livro.capa} />
          {livro?.alugado && (
            <p
              className="alugado"
              style={{
                color: "#ff0000",
              }}
            >
              ALUGADO
            </p>
          )}
        </div>
        <div className="container-infos-livro">
          <div className="infos-livro">
            <h1>{livro.titulo}</h1>
            <p className="livro_autor">{livro.autor}</p>
            <p>Editora: {livro.editora}</p>
            <p>Lançamento: {livro.ano}</p>
            <p>Edição: {livro.edicao}</p>
            <p>Gênero: {livro.genero}</p>
          </div>
          <div className="acoes">
            {mostrarAcoes && (
              <div className="dropdown">
                <button className="dropbtn">Ações</button>
                <div className="dropdown-content">
                  <div
                    className="dropdown-item"
                    onClick={() => setAction(['editar', livro])}
                  >
                    Editar
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => setAction(['excluir', livro])}
                  >
                    Excluir
                  </div>
                  {!livro?.alugado && (
                    <div
                      className="dropdown-item"
                      onClick={() => setAction(['alugar', livro])}
                    >
                      Alugar
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ));
};
