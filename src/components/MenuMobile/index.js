import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const MenuMobile = ({ local }) => {
  return (
    <div className="navbar_mobile">
      {local === "listagemlivro" ? (
        <>
          <Link to="/livro/0" className="link">
            Novo livro
          </Link>
          <Link to="/leitores" className="link">
            Leitores
          </Link>
        </>
      ) : (
        <Link to="/" className="link">
          Livros
        </Link>
      )}
    </div>
  );
};

export default MenuMobile;
