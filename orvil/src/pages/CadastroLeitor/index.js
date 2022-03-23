import React, { useState } from "react";
import "./style.css";

const CadastroLeitor = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [sexo, setSexo] = useState("");
  const [cidade, setCidade] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      nome,
      email,
      telefone,
      sexo,
      cidade,
    });
  };
  return (
    <div className="leitor-body-cadastro">
      <form className="leitor-form" onSubmit={handleSubmit}>
        <h1 className="leitor-label-cadastro-titulo">Cadastro de Leitor</h1>

        <label htmlFor="input-text" className="leitor-label-name">
          Nome
        </label>
        <input
          type="text"
          id="input-text"
          className="leitor-input-name"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label htmlFor="input-email" className="leitor-label-email">
          E-mail
        </label>
        <input
          type="email"
          id="input-email"
          className="leitor-input-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="input-tel" className="leitor-label-telefone">
          Telefone
        </label>
        <input
          type="tel"
          id="input-tel"
          className="leitor-input-telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />

        <label htmlFor="select-sexo" className="leitor-label-sexo">
          Sexo
        </label>
        <select
          required
          id="select-sexo"
          className="leitor-select-sexo"
          value={sexo}
          onChange={(e) => setSexo(e.target.value)}
        >
          <option disabled>Selecione o sexo</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>

        <label htmlFor="input-cidade" className="leitor-label-cidade">
          Cidade
        </label>
        <input
          type="text"
          id="input-cidade"
          className="leitor-input-cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />

        <button className="leitor-button-submit" type="submit">
          Criar
        </button>
      </form>
    </div>
  );
};

export default CadastroLeitor;
