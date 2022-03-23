import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const ListagemLeitor = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   document.body.style.background
  // },[])
  const leitores = [
    {
      id: 1,
      nome: "Maycolo",
      sexo: "Masculino",
      cidade: "Guaçuí",
      email: "maycolo@gmail.com",
      telefone: "(28) 9 9999-9999",
    },
    {
      id: 2,
      nome: "Victor",
      sexo: "Masculino",
      cidade: "Guaçuí",
      email: "victor@gmail.com",
      telefone: "(28) 9 9999-9999",
    },
    {
      id: 3,
      nome: "Maycon React",
      sexo: "Masculino",
      cidade: "Guaçuí",
      email: "maycondouglas@gmail.com",
      telefone: "(28) 9 9999-9999",
    },
    {
      id: 4,
      nome: "Maycon React",
      sexo: "Masculino",
      cidade: "Guaçuí",
      email: "maycondouglas@gmail.com",
      telefone: "(28) 9 9999-9999",
    },
    {
      id: 5,
      nome: "Maycon React",
      sexo: "Masculino",
      cidade: "Guaçuí",
      email: "maycondouglas@gmail.com",
      telefone: "(28) 9 9999-9999",
    },
  ];

  return (
    <body className="leitor-body-listagem">
      <div className="leitor-div-listagem">
        <table className="leitor-table-listagem">
          <tr>
            <th className="leitor-tabela-l1">Nome</th>
            <th className="leitor-tabela-l1">E-mail</th>
            <th className="leitor-tabela-l1">Telefone</th>
            <th className="leitor-tabela-l1">Sexo</th>
            <th className="leitor-tabela-l1">Cidade</th>
            <th className="leitor-tabela-l1"></th>
          </tr>
          {leitores.map((leitor) => (
            <tr key={`leitor-tabela-tr-${leitor.id}`}>
              <th>{leitor.nome}</th>
              <th>{leitor.email}</th>
              <th>{leitor.telefone}</th>
              <th>{leitor.sexo}</th>
              <th>{leitor.cidade}</th>
              <th>
                <select className="leitor-select">
                  <option>Ações</option>
                  <option className="leitor-option-editar" onClick={e => navigate(`/leitor/${leitor.id}`)}>
                    Editar
                  </option>
                  <option className="leitor-option-excluir">Excluir</option>
                </select>
              </th>
            </tr>
          ))}
        </table>
        <button className="leitor-button-novo" onClick={e => navigate(`/leitor/0`)}>Novo</button>
      </div>
    </body>
  );
};

export default ListagemLeitor;
