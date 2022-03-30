import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-div">
        <Link className="navbar-link" to="/">Orvil</Link>
        <ul className="navbar-ul">
            <input className="navbar-input-pesquisa" placeholder="Pesquisar livro"/>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
