import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroLeitor from "./pages/CadastroLeitor";
import ListagemLeitor from "./pages/ListagemLeitor";
import CadastroLivro from "./pages/CadastroLivro";
import ListagemLivro from "./pages/ListagemLivro";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/leitor/:id" element={<CadastroLeitor />} />
        <Route path="/leitores" element={<ListagemLeitor />} />
        <Route path="/livro/:id" element={<CadastroLivro />} />
        <Route path="/" exact element={<ListagemLivro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
