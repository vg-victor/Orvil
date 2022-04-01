import React, { useEffect, useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./style.css";

const CadastroLivro = () => {
  const [capa, setCapa] = useState("");
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [editora, setEditora] = useState("");
  const [ano, setAno] = useState(0);
  const [edicao, setEdicao] = useState(0);
  const [genero, setGenero] = useState("");
  const [livro, setLivro] = useState({});
  const [id, setId] = useState(0);
  const navigate = useNavigate();
  const match = useMatch("/livro/:id");

  const submit = async (event) => {
    event.preventDefault();

    if (match.params.id === "0") {
      let data = {
        capa,
        titulo,
        autor,
        editora,
        ano: parseInt(ano),
        edicao: parseInt(edicao),
        genero,
      };
      const response = await api.post("livros", data);
      response && navigate("/");
    } else {
      let data = {
        ...livro,
        capa,
        titulo,
        autor,
        editora,
        ano: parseInt(ano),
        edicao: parseInt(edicao),
        genero,
      };
      const response = await api.patch(`livros/${match.params.id}`, data);
      response && navigate("/");
    }
  };

  const load = async () => {
    const response = await api.get(`livros/${match.params.id}`);
    setLivro(response.data);

    setCapa(response.data.capa);
    setTitulo(response.data.titulo);
    setAutor(response.data.autor);
    setEditora(response.data.editora);
    setAno(response.data.ano);
    setEdicao(response.data.edicao);
    setGenero(response.data.genero);
  };

  useEffect(() => {
    setId(match.params.id);
    if (id > 0) load();
  }, [match]);

  return (
    <form onSubmit={submit} className="form-livro">
      <img
        style={{
          backgroundColor: "#343E3D",
          padding: "3%",
          borderRadius: "5%",
          width: "250px",
          height: "380px",
          position: "absolute",
          top: "40%",
          left: "30%",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        }}
        src={capa}
        alt={`Capa do livro ${titulo}`}
      />
      <h1 className="h1-livro">
        {id && id > 0 ? "Atualizar Livro" : "Cadastro de Livro"}
      </h1>
      <label htmlFor="input-capa" className="label-livro-capa">
        Insira a url da capa
      </label>
      <input
        required
        type="url"
        id="input-capa"
        className="input-livro-capa"
        value={capa}
        onChange={(e) => setCapa(e.target.value)}
      />

      <label htmlFor="input-titulo" className="label-livro-titulo">
        Título
      </label>
      <input
        required
        type="text"
        id="input-titulo"
        className="input-livro-titulo"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <label htmlFor="input-autor" className="label-livro-autor">
        Autor(a)
      </label>
      <input
        required
        type="text"
        id="input-autor"
        className="input-livro-autor"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
      />

      <label htmlFor="input-editora" className="label-livro-editora">
        Editora
      </label>
      <input
        required
        type="text"
        id="input-editora"
        className="input-livro-editora"
        value={editora}
        onChange={(e) => setEditora(e.target.value)}
      />

      <label htmlFor="input-ano" className="label-livro-ano">
        Ano
      </label>
      <input
        required
        type="number"
        id="input-ano"
        className="input-livro-ano"
        value={ano}
        onChange={(e) => setAno(e.target.value)}
      />

      <label htmlFor="input-edicao" className="label-livro-edicao">
        Edição
      </label>
      <input
        required
        type="number"
        id="input-edicao"
        className="input-livro-edicao"
        value={edicao}
        onChange={(e) => {
          setEdicao(e.target.value);
          console.log("oié");
        }}
      />

      <label htmlFor="input-genero" className="label-livro-genero">
        Gênero
      </label>
      <input
        required
        type="text"
        id="input-genero"
        className="input-livro-genero"
        value={genero}
        onChange={(e) => setGenero(e.target.value)}
      />

      <button className="button-livro-cadastrar-submit" type="submit">
        {id && id > 0 ? "Salvar" : "Cadastrar"}
      </button>
    </form>
  );
};

export default CadastroLivro;
