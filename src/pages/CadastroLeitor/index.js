import React, { useState, useEffect } from "react";
import { useMatch, useNavigate, Link } from "react-router-dom";
import "./style.css";
import api from "../../services/api";
import Swal from "sweetalert2";

const CadastroLeitor = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [sexo, setSexo] = useState("");
  const [cidade, setCidade] = useState("");
  const [id, setId] = useState(0);
  const [leitor, setLeitor] = useState({});
  const navigate = useNavigate();
  const match = useMatch("/leitor/:id");

  const submit = async (event) => {
    event.preventDefault();

    if (!sexo || sexo === "#") {
      Swal.fire("Selecione o sexo", "", "info");
      return;
    }

    if (match.params.id === "0") {
      let data = {
        nome,
        email,
        telefone,
        sexo,
        cidade,
      };
      const response = await api.post("leitores", data);
      response && navigate("/leitores");
    } else {
      let data = {
        ...leitor,
        nome,
        email,
        telefone,
        sexo,
        cidade,
      };
      const response = await api.patch(`leitores/${match.params.id}`, data);
      response && navigate("/leitores");
    }
  };

  const load = async () => {
    const response = await api.get(`leitores/${match.params.id}`);
    setLeitor(response.data);

    setNome(response.data.nome);
    setEmail(response.data.email);
    setTelefone(response.data.telefone);
    setSexo(response.data.sexo);
    setCidade(response.data.cidade);
  };

  useEffect(() => {
    if (match.params.id > 0) load();
    setId(match.params.id);
  }, [match]);

  return (
    <div className="leitor-body-cadastro">
      <form className="leitor-form" onSubmit={submit}>
        <Link
          className="link-editar"
          to="/leitores"
          style={{ color: "var(--verde-claro)" }}
        >
          ← Voltar
        </Link>
        <h1 className="leitor-h1-cadastro-titulo">
          {id && id > 0 ? "Editar Leitor" : "Cadastro de Leitor"}
        </h1>

        <label htmlFor="input-text" className="leitor-label">
          Nome
        </label>
        <input
          required
          type="text"
          id="input-text"
          className="leitor-input"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label htmlFor="input-email" className="leitor-label">
          E-mail
        </label>
        <input
          required
          type="email"
          id="input-email"
          className="leitor-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="input-tel" className="leitor-label">
          Telefone
        </label>
        <input
          // size='11'
          // maxlength='11'
          // onKeyPress='formata(this,""(##)####-####"")'
          required
          formControlName="sGPTypeDeliveryId"
          placeholder="(xx) xxxxx-xxxx"
          pattern="^\(\d{2}\) \d{5}-\d{4}$"
          type="tel"
          id="input-tel"
          className="leitor-input"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />

        <label htmlFor="select-sexo" className="leitor-label">
          Sexo
        </label>
        <select
          required
          id="select-sexo"
          className="leitor-select-sexo"
          defaultValue="#"
          value={sexo}
          onChange={(e) => setSexo(e.target.value)}
        >
          <option className="option-sexo" disabled>Selecione o sexo</option>
          <option className="option-sexo" value="Masculino">Masculino</option>
          <option className="option-sexo" value="Feminino">Feminino</option>
        </select>

        <label htmlFor="input-cidade" className="leitor-label">
          Cidade
        </label>
        <input
          required
          type="text"
          id="input-cidade"
          className="leitor-input"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />

        <button className="leitor-button-submit" type="submit">
          {id && id > 0 ? "Salvar" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
};

export default CadastroLeitor;
