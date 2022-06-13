import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./style.css";
import api from "../../services/api.js";
import Navbar from "../../components/Navbar";

const ListagemLeitor = () => {
  const [action, setAction] = useState(["", {}]);
  const [leitores, setLeitores] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const navigate = useNavigate();

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
      title: `Excluir leitor "${nome}"?`,
      showCancelButton: true,
      confirmButtonText: "Sim",
      confirmButtonColor: "green",
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

  return (
    <body className="leitor-body-listagem">
      <Navbar setPesquisa={setPesquisa} />
      <div className="leitor-div-listagem">
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
                  <th>
                    <select
                      value={action}
                      onChange={(e) => setAction([e.target.value, leitor])}
                      className="leitor-select"
                    >
                      <option value="ação">Ações</option>
                      <option value="editar" className="leitor-option-editar">
                        Editar
                      </option>
                      <option value="excluir" className="leitor-option-excluir">
                        Excluir
                      </option>
                    </select>
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
      </div>
      {leitores && leitores.length ? (
        <button
          className="leitor-button-novo"
          onClick={() => navigate(`/leitor/0`)}
        >
          Novo
        </button>
      ) : (
        <p></p>
      )}
    </body>
  );
};

export default ListagemLeitor;
