import React, { useEffect, useState } from "react";
import { useMatch } from "react-router-dom";
import "./style.css";
import api from "../../services/api.js";
import Navbar from "../../components/Navbar";

const ListagemLivro = () => {
  const [livros, setLivros] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    load();
  }, [pesquisa])

  const load = async () => {
    if(pesquisa){
      const response = await api.get(`livros/getbytitle?title=${pesquisa}`);
      setLivros([...response.data]); 
    }
    else{
      const response = await api.get("livros");
      setLivros([...response.data]);
    }
  }


  // const teste = [
  //   {
  //     id: 1,
  //     capa: "https://images-na.ssl-images-amazon.com/images/I/91YQ3e1VNKL.jpg",
  //     titulo: "Cristianismo puro e simples",
  //     autor: "C. S. Lewis",
  //     editora: "Thomas Nelson Brasil",
  //     ano: "2017",
  //     edicao: "1ª",
  //     genero: "1. Cristianismo. 2. Vida cristã.",
  //   },
  //   {
  //     id: 2,
  //     capa: "https://images-na.ssl-images-amazon.com/images/I/71y-4dpFyHL.jpg",
  //     titulo: "Jogador Número Um",
  //     autor: "Ernest Cline",
  //     editora: "Intrínseca",
  //     ano: "2021",
  //     edicao: "1ª",
  //     genero: "1. Ficção científica.",
  //   },
  //   {
  //     id: 3,
  //     capa: "https://images-na.ssl-images-amazon.com/images/I/71y-4dpFyHL.jpg",
  //     titulo: "Jogador Número Um",
  //     autor: "Ernest Cline",
  //     editora: "Intrínseca",
  //     ano: "2021",
  //     edicao: "1ª",
  //     genero: "1. Ficção científica.",
  //   },
  //   {
  //     id: 4,
  //     capa: "https://images-na.ssl-images-amazon.com/images/I/91YQ3e1VNKL.jpg",
  //     titulo: "Cristianismo puro e simples",
  //     autor: "C. S. Lewis",
  //     editora: "Thomas Nelson Brasil",
  //     ano: "2017",
  //     edicao: "1ª",
  //     genero: "1. Cristianismo. 2. Vida cristã.",
  //   },
  //   {
  //     id: 5,
  //     capa: "https://images-na.ssl-images-amazon.com/images/I/71y-4dpFyHL.jpg",
  //     titulo: "Jogador Número Um",
  //     autor: "Ernest Cline",
  //     editora: "Intrínseca",
  //     ano: "2021",
  //     edicao: "1ª",
  //     genero: "1. Ficção científica.",
  //   },
  //   {
  //     id: 6,
  //     capa: "https://images-na.ssl-images-amazon.com/images/I/71y-4dpFyHL.jpg",
  //     titulo: "Jogador Número Um",
  //     autor: "Ernest Cline",
  //     editora: "Intrínseca",
  //     ano: "2021",
  //     edicao: "1ª",
  //     genero: "1. Ficção científica.",
  //   },
  //   {
  //     id: 7,
  //     capa: "https://images-na.ssl-images-amazon.com/images/I/91YQ3e1VNKL.jpg",
  //     titulo: "Cristianismo puro e simples",
  //     autor: "C. S. Lewis",
  //     editora: "Thomas Nelson Brasil",
  //     ano: "2017",
  //     edicao: "1ª",
  //     genero: "1. Cristianismo. 2. Vida cristã.",
  //   },
  //   {
  //     id: 8,
  //     capa: "https://images-na.ssl-images-amazon.com/images/I/71y-4dpFyHL.jpg",
  //     titulo: "Jogador Número Um",
  //     autor: "Ernest Cline",
  //     editora: "Intrínseca",
  //     ano: "2021",
  //     edicao: "1ª",
  //     genero: "1. Ficção científica.",
  //   },
  //   {
  //     id: 9,
  //     capa: "https://images-na.ssl-images-amazon.com/images/I/71y-4dpFyHL.jpg",
  //     titulo: "Jogador Número Um",
  //     autor: "Ernest Cline",
  //     editora: "Intrínseca",
  //     ano: "2021",
  //     edicao: "1ª",
  //     genero: "1. Ficção científica.",
  //   },
  //   {
  //     id: 10,
  //     capa: "https://images-na.ssl-images-amazon.com/images/I/91YQ3e1VNKL.jpg",
  //     titulo: "Cristianismo puro e simples",
  //     autor: "C. S. Lewis",
  //     editora: "Thomas Nelson Brasil",
  //     ano: "2017",
  //     edicao: "1ª",
  //     genero: "1. Cristianismo. 2. Vida cristã.",
  //   },
  //   {
  //     id: 11,
  //     capa: "https://images-na.ssl-images-amazon.com/images/I/71y-4dpFyHL.jpg",
  //     titulo: "Jogador Número Um",
  //     autor: "Ernest Cline",
  //     editora: "Intrínseca",
  //     ano: "2021",
  //     edicao: "1ª",
  //     genero: "1. Ficção científica.",
  //   },
  //   {
  //     id: 12,
  //     capa: "https://images-na.ssl-images-amazon.com/images/I/71y-4dpFyHL.jpg",
  //     titulo: "Jogador Número Um",
  //     autor: "Ernest Cline",
  //     editora: "Intrínseca",
  //     ano: "2021",
  //     edicao: "1ª",
  //     genero: "1. Ficção científica.",
  //   },
  //   {
  //     id: 13,
  //     capa: "https://images-na.ssl-images-amazon.com/images/I/91YQ3e1VNKL.jpg",
  //     titulo: "Cristianismo puro e simples",
  //     autor: "C. S. Lewis",
  //     editora: "Thomas Nelson Brasil",
  //     ano: "2017",
  //     edicao: "1ª",
  //     genero: "1. Cristianismo. 2. Vida cristã.",
  //   },
  //   {
  //     id: 14,
  //     capa: "https://images-na.ssl-images-amazon.com/images/I/71y-4dpFyHL.jpg",
  //     titulo: "Jogador Número Um",
  //     autor: "Ernest Cline",
  //     editora: "Intrínseca",
  //     ano: "2021",
  //     edicao: "1ª",
  //     genero: "1. Ficção científica.",
  //   },
  //   {
  //     id: 15,
  //     capa: "https://images-na.ssl-images-amazon.com/images/I/71y-4dpFyHL.jpg",
  //     titulo: "Jogador Número Um",
  //     autor: "Ernest Cline",
  //     editora: "Intrínseca",
  //     ano: "2021",
  //     edicao: "1ª",
  //     genero: "1. Ficção científica.",
  //   },
  //   {
  //     id: 16,
  //     capa: "https://images-na.ssl-images-amazon.com/images/I/91YQ3e1VNKL.jpg",
  //     titulo: "Cristianismo puro e simples",
  //     autor: "C. S. Lewis",
  //     editora: "Thomas Nelson Brasil",
  //     ano: "2017",
  //     edicao: "1ª",
  //     genero: "1. Cristianismo. 2. Vida cristã.",
  //   },
  //   {
  //     id: 17,
  //     capa: "https://images-na.ssl-images-amazon.com/images/I/71y-4dpFyHL.jpg",
  //     titulo: "Jogador Número Um",
  //     autor: "Ernest Cline",
  //     editora: "Intrínseca",
  //     ano: "2021",
  //     edicao: "1ª",
  //     genero: "1. Ficção científica.",
  //   },
  //   {
  //     id: 18,
  //     capa: "https://images-na.ssl-images-amazon.com/images/I/71y-4dpFyHL.jpg",
  //     titulo: "Jogador Número Um",
  //     autor: "Ernest Cline",
  //     editora: "Intrínseca",
  //     ano: "2021",
  //     edicao: "1ª",
  //     genero: "1. Ficção científica.",
  //   },
  //   {
  //     id: 19,
  //     capa: "https://images-na.ssl-images-amazon.com/images/I/91YQ3e1VNKL.jpg",
  //     titulo: "Cristianismo puro e simples",
  //     autor: "C. S. Lewis",
  //     editora: "Thomas Nelson Brasil",
  //     ano: "2017",
  //     edicao: "1ª",
  //     genero: "1. Cristianismo. 2. Vida cristã.",
  //   },
  //   {
  //     id: 20,
  //     capa: "https://images-na.ssl-images-amazon.com/images/I/71y-4dpFyHL.jpg",
  //     titulo: "Jogador Número Um",
  //     autor: "Ernest Cline",
  //     editora: "Intrínseca",
  //     ano: "2021",
  //     edicao: "1ª",
  //     genero: "1. Ficção científica.",
  //   },
  //   {
  //     id: 21,
  //     capa: "https://images-na.ssl-images-amazon.com/images/I/71y-4dpFyHL.jpg",
  //     titulo: "Jogador Número Um",
  //     autor: "Ernest Cline",
  //     editora: "Intrínseca",
  //     ano: "2021",
  //     edicao: "1ª",
  //     genero: "1. Ficção científica.",
  //   },
  //   {
  //     id: 22,
  //     capa: "https://images-na.ssl-images-amazon.com/images/I/91YQ3e1VNKL.jpg",
  //     titulo: "Cristianismo puro e simples",
  //     autor: "C. S. Lewis",
  //     editora: "Thomas Nelson Brasil",
  //     ano: "2017",
  //     edicao: "1ª",
  //     genero: "1. Cristianismo. 2. Vida cristã.",
  //   },
  //   {
  //     id: 23,
  //     capa: "https://images-na.ssl-images-amazon.com/images/I/71y-4dpFyHL.jpg",
  //     titulo: "Jogador Número Um",
  //     autor: "Ernest Cline",
  //     editora: "Intrínseca",
  //     ano: "2021",
  //     edicao: "1ª",
  //     genero: "1. Ficção científica.",
  //   },
  //   {
  //     id: 24,
  //     capa: "https://images-na.ssl-images-amazon.com/images/I/71y-4dpFyHL.jpg",
  //     titulo: "Jogador Número Um",
  //     autor: "Ernest Cline",
  //     editora: "Intrínseca",
  //     ano: "2021",
  //     edicao: "1ª",
  //     genero: "1. Ficção científica.",
  //   },
  // ];

  return (
    <body className="body-livro">
      <Navbar setPesquisa={setPesquisa}/>
      <ul className="div-livro-listagem">
        {livros.map((livro) => (
          <li key={`card-livros-li-${livro.id}`} className="livros">
            <img align="left" src={livro.capa} />
            <h1>{livro.titulo}</h1>
            <p className="livro-autor-p">{livro.autor}</p>
            <p>Editora: {livro.editora}</p>
            <p>Lançamento: {livro.ano}</p>
            <p>Edição: {livro.edicao}</p>
            <p>Gênero: {livro.genero}</p>
          </li>
        ))}
      </ul>
    </body>
  );
};

export default ListagemLivro;
