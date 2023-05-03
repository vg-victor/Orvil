import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = ({ setPesquisa, local }) => {
  const [input, setInput] = useState("");

  return (
    <header className="header">
      <Link to="/">
        <img
          style={{ width: "45px", height: "45px" }}
          src="orvil.ico"
          alt="Página inicial"
          className="logo_img"
        />
      </Link>
      <div className="pesquisar">
        <input
          onKeyDown={(e) =>
            e.key === "Enter" ? setPesquisa(input) : setPesquisa("")
          }
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input_pesquisa"
          placeholder="Pesquisar"
        />
        <button className="button_buscar" onClick={() => setPesquisa(input)}>
          Buscar
        </button>
      </div>
      <div className="links">
        {local === "listagemlivro" ? (
          <>
            <Link to="livro/0" className="link">
              Novo livro
            </Link>
            <Link to="leitores" className="link">
              Leitores
            </Link>
          </>
        ) : (
          <Link to="/" className="link">
            Livros
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
