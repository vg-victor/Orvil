import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import CadastroLeitor from "./pages/CadastroLeitor";
import ListagemLeitor from "./pages/ListagemLeitor";
import CadastroLivro from "./pages/CadastroLivro";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/leitores" element={<ListagemLeitor />}/>
        <Route path="/leitor/:id"element={<CadastroLeitor />}/>
        <Route path="/livro/:id"element={<CadastroLivro />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;