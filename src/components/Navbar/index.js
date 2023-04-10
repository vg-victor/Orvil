import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = ({ setPesquisa, local }) => {
  const [input, setInput] = useState("");

  return (
    <nav className="navbar">
      <div className="navbar-div">
        <ol className="navbar-ol">
          <div className="div-link-img-incial">
            <Link className="navbar-link-inicial" to="/">
              <img
                className="navbar-img-inicial"
                style={{ width: "45px", height: "45px" }}
                src="orvil.ico"
                alt="Página inicial"
              />
            </Link>
          </div>
          <div className="div-ipt-pesquisar-btn-buscar">
            <input
              onKeyDown={(e) =>
                e.key === "Enter" ? setPesquisa(input) : setPesquisa("")
              }
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
          </div>
          <div className="div-links-nvlivro-leitores">
            {local === "listagemlivro" ? (
              <>
                <Link to="livro/0" className="navbar-link-novolivro">
                  Novo livro
                </Link>
                <Link to="leitores" className="navbar-link-leitores">
                  Leitores
                </Link>
              </>
            ) : (
              <Link to="/" className="navbar-link-leitores">
                Livros
              </Link>
            )}
          </div>
        </ol>
      </div>
    </nav>
  );
};

export default Navbar;
