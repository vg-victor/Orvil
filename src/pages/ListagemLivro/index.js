import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import api from "../../services/api.js";
import Navbar from "../../components/Navbar";
import Swal from "sweetalert2";
import ListagemLivros from "../../components/ListagemLivros";
import Modal from "react-modal";

const ListagemLivro = () => {
  const [action, setAction] = useState(["", {}]);
  const [livros, setLivros] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [visible, setVisible] = useState(false);
  const [leitores, setLeitores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    load();
  }, [pesquisa]);

  useEffect(() => {
    if (action[0] === "alugar") openModal();
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

  const alert = (id, titulo) => {
    Swal.fire({
      icon: "warning",
      title: `Excluir livro ${titulo}?`,
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

  const openModal = async () => {
    const res = await api.get(`leitores`);
    setLeitores([...res.data]);
    setVisible(true);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      backgroundColor: "#343e3d",
      color: "#aedcc0",
      transform: "translate(-50%, -50%)",
    },
  };

  const alugar = async (leitorId, livroId) => {
    const dataEmprestimo = "2023-05-01";
    const dataDevolucao = "2032-05-10";
    await api.post("registros", {
      leitorId,
      livroId,
      dataEmprestimo,
      dataDevolucao
    })
    load();
    setVisible(false)
  }

  return (
    <>
      <Modal
        isOpen={visible}
        onRequestClose={() => setVisible(false)}
        style={customStyles}
        contentLabel="Orvil"
      >
        {leitores && leitores.map(leitor => (
          <div>
            <p>{leitor.nome}</p>
            <button onClick={(e)=>alugar(leitor.id, action[1].id)}>Alugar</button>
          </div>
        ))}
      </Modal>

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
            <ListagemLivros
              livros={livros}
              mostrarAcoes={true}
              action={action}
              setAction={setAction}
            />
          )}
        </ul>
      </body>
    </>
  );
};

export default ListagemLivro;
