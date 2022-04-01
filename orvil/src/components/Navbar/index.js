import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const Navbar = ({ setPesquisa }) => {
  // const navigate = useNavigate();

  const [input, setInput] = useState("");

  return (
    <nav className="navbar">
      <div className="navbar-div">
        <Link className="navbar-link-inicial" to="/">
        <img style={{width: "60px", height: "60px"}} src="logo.png" alt="Página inicial"/>
        </Link>
        <ol className="navbar-ol">
          <input
            onKeyDown={e => e.key === "Enter" ? setPesquisa(input) : setPesquisa("")}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="navbar-input-pesquisa"
            placeholder="Pesquisar"
          />
          <button
            className="navbar-button-buscar"
            onClick={() => setPesquisa(input)}
          >
            Buscar
          </button>
          <Link to="livro/0" className="navbar-link-novolivro">Novo livro</Link>
          <Link to="leitores" className="navbar-link-leitores">Leitores </Link>
        </ol>
      </div>
    </nav>
  );
};

export default Navbar;
