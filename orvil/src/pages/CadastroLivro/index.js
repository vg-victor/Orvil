import React, { useState } from "react";
import { useMatch } from "react-router-dom";
import "./style.css";

const CadastroLivro = () => {
  const [capa, setCapa] = useState("");
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [editora, useEditora] = useState("");
  const [ano, setAno] = useState("");
  const [edicao, setEdicao] = useState("");
  const [genero, setGenero] = useState("");
  const [id, setId] = useState(0);
  const match = useMatch("/livro/:id");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      capa,
      titulo,
      autor,
      editora,
      ano,
      edicao,
      genero,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-livro">
        <h1 className="h1-livro">Cadastro de Livro</h1>
      <label className="label-livro-capa">Insira a url da capa</label>
      <input type="url" id="input-capa" className="input-livro-capa"/>

      <label className="label-livro-titulo">Título</label>
      <input type="text" id="input-titulo" className="input-livro-titulo"/>

      <label className="label-livro-autor">Autor(a)</label>
      <input type="text" id="input-autor" className="input-livro-autor"/>

      <label className="label-livro-editora">Editora</label>
      <input type="text" id="input-editora" className="input-livro-editora"/>

      <label className="label-livro-ano">Ano</label>
      <input type="number" id="input-ano" className="input-livro-ano"/>

      <label className="label-livro-edicao">Edição</label>
      <input type="number" id="input-edicao" className="input-livro-edicao"/>

      <label className="label-livro-genero">Gênero</label>
      <input type="text" id="input-genero" className="input-livro-genero"/>

      <button className="button-livro-cadastrar-submit" type="submit">Cadastrar</button>
    </form>
  );
};

export default CadastroLivro;
