import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

const Alugados = ({id, livro}) => {
  const load = async () => {
    const response = await api.get(`livros/alugados/${id}`);
  };

  return (
    <>
      <li key={`card-livros-li-${livro.id}`} className="livros">
        <img align="left" src={livro.capa} />
        <h1>{livro.titulo}</h1>
      </li>
    </>
  );
};

export default Alugados;