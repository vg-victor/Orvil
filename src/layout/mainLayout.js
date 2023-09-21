import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./style.css";

export default ({ setPesquisa = () => {}, local, children }) => {
  return (
    <div className="main_layout">
      <Navbar setPesquisa={setPesquisa} local={local} />
      <section className="conteudo">{children}</section>
      <Footer />
    </div>
  );
};
