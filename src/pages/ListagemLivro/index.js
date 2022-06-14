import React, { useEffect, useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import "./style.css";
import api from "../../services/api.js";
import Navbar from "../../components/Navbar";
import Swal from "sweetalert2";

const ListagemLivro = () => {
  const [action, setAction] = useState(["", {}]);
  const [livros, setLivros] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    load();
  }, [pesquisa]);

  useEffect(() => {
    if (action[0] === "editar") navigate(`/livro/${action[1].id}`);
    if (action[0] === "excluir") alert(action[1].id, action[1].titulo);
  }, [action]);

  const load = async () => {
    if (pesquisa) {
      const response = await api.get(`livros/getbytitle?title=${pesquisa}`);
      setLivros([...response.data]);
    } else {
      const response = await api.get("livros");
      setLivros([...response.data]);
    }
  };

  const alert = (titulo, id) => {
    Swal.fire({
      icon: "warning",
      title: `Excluir livro "${titulo}"?`,
      showCancelButton: true,
      confirmButtonText: "Sim",
      confirmButtonColor: "green",
    }).then((response) => {
      if (response.isConfirmed) {
        excluir(id);
      }
      if (response.isDenied || response.isDismissed) {
        load();
      }
    });
  };

  const excluir = async (id) => {
    const response = await api.delete(`livros/${id}`);
    response &&
      Swal.fire("Excluido", "", "success").then(() => {
        load();
      });
  };

  return (
    <body className="body-livro">
      <Navbar setPesquisa={setPesquisa} local="listagemlivro" />
      <ul className="div-livro-listagem">
        {livros && !livros.length ? (
          <>
            <h1
              style={{
                marginTop: "120px",
                textAlign: "center",
                fontSize: "50px",
                color: "#343e3d",
              }}
            >
              Cadastre um livro
            </h1>
            <button
              className="button-sem-cadastro"
              onClick={() => navigate("livro/0")}
            >
              Novo livro
            </button>
          </>
        ) : (
          <>
            {livros.map((livro) => (
              <li key={`card-livros-li-${livro.id}`} className="livros">
                <img align="left" src={livro.capa} />
                <h1>{livro.titulo}</h1>
                <p className="livro-autor-p">{livro.autor}</p>
                <p>Editora: {livro.editora}</p>
                <p>Lançamento: {livro.ano}</p>
                <p>Edição: {livro.edicao}</p>
                <p>Gênero: {livro.genero}</p>
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
                  <option>Alugar</option>
                </select>
              </li>
            ))}
          </>
        )}
      </ul>
    </body>
  );
};

export default ListagemLivro;