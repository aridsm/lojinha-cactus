import React from "react";
import classes from "./ProdutosPagination.module.css";
import { ReactComponent as ArrowLeft } from "../../../assets/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../../assets/arrow-right.svg";

const ProdutosPagination = ({
  produtos,
  itensPorPag,
  setPagAtual,
  pagAtual,
}) => {
  const paginas = [];
  const totalPaginas = Math.ceil(produtos.length / itensPorPag);
  console.log(paginas, pagAtual);
  for (let i = 1; i <= totalPaginas; i++) {
    paginas.push(i);
  }

  const handleClickNumber = (e) => {
    setPagAtual(e.currentTarget.innerText);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClickPage = (pageValue) => {
    if (pageValue < 1) {
      return;
    }
    if (pageValue > +totalPaginas) {
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPagAtual(pageValue);
  };

  return (
    <nav className={classes.nav}>
      <button onClick={() => handleClickPage(+pagAtual - 1)}>
        <ArrowLeft />
      </button>
      {paginas.map((pag) => (
        <button
          key={pag}
          onClick={handleClickNumber}
          className={`${classes.pagNumber} ${
            +pag === +pagAtual ? classes.pagAtual : ""
          }`}
        >
          {pag}
        </button>
      ))}
      <button onClick={() => handleClickPage(+pagAtual + 1)}>
        <ArrowRight />
      </button>
    </nav>
  );
};

export default ProdutosPagination;
