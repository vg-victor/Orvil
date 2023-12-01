import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import Swal from "sweetalert2";
import "./style.css";
import api from "../../services/api.js";
import Navbar from "../../components/Navbar";
import Alugados from "../../components/Alugados";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ListagemLeitor = () => {
  const [action, setAction] = useState(["", {}]);
  const [leitores, setLeitores] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [registro, setRegistro] = useState(null);
  const [leitorAtualId, setLeitorAtualId] = useState(0);
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [alugados, setAlugados] = useState([]);

  useEffect(() => {
    load();
  }, [pesquisa]);

  useEffect(() => {
    if (action[0] === "editar") {
      navigate(`/leitor/${action[1].id}`);
    }
    if (action[0] === "excluir") {
      alert(action[1].id, action[1].nome);
    }
  }, [action]);

  const load = async () => {
    if (pesquisa) {
      const response = await api.get(`leitores/getbyname?name=${pesquisa}`);
      setLeitores([...response.data]);
    } else {
      const response = await api.get("leitores");
      setLeitores([...response.data]);
    }
  };

  const alert = (id, nome) => {
    Swal.fire({
      icon: "warning",
      iconColor: "var(--verde-claro)",
      titleText: `Excluir leitor(a) ${nome}?`,
      showCancelButton: true,
      confirmButtonText: "Sim",
      confirmButtonColor: "var(--verde-claro)",
      cancelButtonText: "Cancelar",
      cancelButtonColor: "rgb(38, 48, 46)",
      background: "var(--verde-escuro)",
      color: "var(--verde-claro)",
    }).then((response) => {
      if (response.isConfirmed) {
        excluir(id);
      }
      if (response.isDenied || response.isDismissed) {
        setAction("ação");
      }
    });
  };

  const excluir = async (id) => {
    const response = await api.delete(`leitores/${id}`);
    response &&
      Swal.fire("Excluido!", "", "success").then(() => {
        load();
      });
  };

  const customStyles = {
    content: {
      top: "50%",
      right: "auto",
      bottom: "auto",
      left: "50%",
      backgroundColor: "#343e3d",
      color: "#aedcc0",
      transform: "translate(-50%, -50%)",
    },
  };

  const openModal = async (id) => {
    await obterAlugados(id)
    setLeitorAtualId(id);
    setVisible(true);
  };

  const obterAlugados = async (id) => {
    const response = await api.get(`registros/getByLeitor?leitorId=${id}`);
    setAlugados(response.data.map((e) => e.livro));
    setRegistro(response.data);
  }

  return (
    <>
      <Modal
        isOpen={visible}
        onRequestClose={() => setVisible(false)}
        style={customStyles}
        contentLabel="Orvil"
      >
        <div className="container-btn-fechar">
          <a onClick={() => setVisible(false)} className="btn-fechar">
            <FontAwesomeIcon icon={faXmark} />
          </a>
        </div>
        <div className="title-livros-alugados">
          <h1 className="h1-livros-alugados">Livros alugados</h1>
          <div className="modal-livros-alugados">
            {alugados.map((item) => (
              <Alugados leitorAtualId={leitorAtualId} load={obterAlugados} key={`alugados-${item.id}`} livro={item} registro={registro?.find(r => r.livro.id === item.id)} />
            ))}
          </div>
        </div>
        <div><p style={{ height: "25px" }}></p></div>
      </Modal >
      <Navbar setPesquisa={setPesquisa} />
      <body className="leitor-body-listagem">
        <div className="leitor-div-listagem">
          <div className="btn-cadastro-leitor">
            {leitores && leitores.length ? (
              <button
                className="leitor-button-novo"
                onClick={() => navigate(`/leitor/0`)}
              >
                Cadastrar novo leitor
              </button>
            ) : (
              <p></p>
            )
            }
          </div>
          {leitores && leitores.length ? (
            <table className="leitor-table-listagem">
              <tr>
                <th className="leitor-tabela-l1">Nome</th>
                <th className="leitor-tabela-l1">E-mail</th>
                <th className="leitor-tabela-l1">Telefone</th>
                <th className="leitor-tabela-l1">Sexo</th>
                <th className="leitor-tabela-l1">Cidade</th>
                <th className="leitor-tabela-l1"></th>
              </tr>
              {leitores &&
                leitores.length &&
                leitores.map((leitor) => (
                  <tr key={`leitor-tabela-tr-${leitor.id}`}>
                    <th>{leitor.nome}</th>
                    <th>{leitor.email}</th>
                    <th>{leitor.telefone}</th>
                    <th>{leitor.sexo}</th>
                    <th>{leitor.cidade}</th>
                    <th className="th-btns">
                      <div>
                        <button
                          onClick={() => openModal(leitor.id)}
                          className="btn-livros-alugados"
                        >
                          Livros alugados
                        </button>
                      </div>
                      <div className="dropdown-leitor">
                        <button className="dropbtn-leitor">Ações</button>
                        <div className="dropdown-content-leitor">
                          <div
                            onClick={() => setAction(['editar', leitor])}
                            className="dropdown-item-leitor"
                          >
                            Editar
                          </div>
                          <div
                            onClick={() => setAction(['excluir', leitor])}
                            className="dropdown-item-leitor"
                          >
                            Excluir
                          </div>
                        </div>
                      </div>
                    </th>
                  </tr>
                ))}
            </table>
          ) : (
            <div>
              <h1>Nenhum registro foi encontrado.</h1>
              <p>Clique em "Novo registro".</p>
              <button
                className="leitor-button-novo"
                onClick={() => navigate(`/leitor/0`)}
              >
                Novo registro
              </button>
            </div>
          )}
        </div >
      </body >
    </>
  );
};

export default ListagemLeitor;
