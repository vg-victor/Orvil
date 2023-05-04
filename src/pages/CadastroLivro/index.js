import React, { useEffect, useState } from "react";
import { useMatch, useNavigate, Link } from "react-router-dom";
import api from "../../services/api";
import "./style.css";
import img from "../../assets/img/logo.png";
import Navbar from "../../components/Navbar";

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
    if (match.params.id > 0) load();
  }, [match]);

  return (
    <>
      {/* <Link className="link_voltar" to="/">
        ← Voltar
      </Link> */}
      <Navbar />
      <main className="container">
        <form onSubmit={submit} className="form_livro">
          <img
            className="img_capa"
            src={capa ? capa : img}
            alt={`Capa do livro ${titulo}`}
          />
          <div className="form_content">
            <h1 className="h1_livro">
              {id && id > 0 ? "Atualizar Livro" : "Cadastro de Livro"}
            </h1>

            <label htmlFor="input-capa" className="labels">
              Insira a url da capa
            </label>
            <input
              required
              type="url"
              id="input-capa"
              className="inputs"
              value={capa}
              onChange={(e) => setCapa(e.target.value)}
            />

            <label htmlFor="input-titulo" className="labels">
              Título
            </label>
            <input
              required
              type="text"
              id="input-titulo"
              className="inputs"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />

            <label htmlFor="input-autor" className="labels">
              Autor(a)
            </label>
            <input
              required
              type="text"
              id="input-autor"
              className="inputs"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
            />

            <label htmlFor="input-editora" className="labels">
              Editora
            </label>
            <input
              required
              type="text"
              id="input-editora"
              className="inputs"
              value={editora}
              onChange={(e) => setEditora(e.target.value)}
            />

            <label htmlFor="input-ano" className="labels">
              Ano
            </label>
            <input
              required
              type="number"
              id="input-ano"
              className="inputs"
              value={ano}
              onChange={(e) => setAno(e.target.value)}
            />

            <label htmlFor="input-edicao" className="labels">
              Edição
            </label>
            <input
              required
              type="number"
              id="input-edicao"
              className="inputs"
              value={edicao}
              onChange={(e) => {
                setEdicao(e.target.value);
              }}
            />

            <label htmlFor="input-genero" className="labels">
              Gênero
            </label>
            <input
              required
              type="text"
              id="input-genero"
              className="inputs"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
            />

            <button className="button_cadastrar" type="submit">
              {id && id > 0 ? "Salvar" : "Cadastrar"}
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default CadastroLivro;
