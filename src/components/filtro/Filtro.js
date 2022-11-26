import React, { useContext, useRef } from "react";
import { FilterContext } from "../../context/FilterContext";
import WrapperButton from "../utilities/WrapperButton";
import ButtonFechar from "../utilities/ButtonFechar";
import classes from "./Filtro.module.css";
import FormCategoria from "./FormCategoria";
import FormCores from "./FormCores";
import FormPreco from "./FormPreco";
import useVisibility from "../../customHook/useVisibility";
import { ReactComponent as IconFiltro } from "../../assets/funnel.svg";

const Filtro = () => {
  const { limparFiltro } = useContext(FilterContext);
  const refBtnFiltro = useRef();
  const { menuVisible, setMenuVisible } = useVisibility(refBtnFiltro);

  const btnFiltro = (
    <button
      className={`${classes.btnAbrirFiltro} ${
        menuVisible ? classes.filtroVisible : ""
      }`}
      aria-label="Abrir filtro"
      type="button"
      onClick={() => setMenuVisible(true)}
    >
      <IconFiltro />
    </button>
  );

  const aplicarFiltro = () => {};

  return (
    <>
      <div ref={refBtnFiltro} className={classes.filtroContainer}>
        {btnFiltro}
        {menuVisible && (
          <section
            className={`${classes.filtro} ${
              menuVisible ? classes.filtroVisible : ""
            }`}
          >
            <ButtonFechar
              onClose={() => setMenuVisible(false)}
              className={classes.btnFechar}
            />
            <h2>Filtrar pesquisa</h2>
            <FormCategoria />
            <FormCores />
            <FormPreco />

            <WrapperButton className={classes.btn} onClick={aplicarFiltro}>
              Aplicar filtro
            </WrapperButton>
            <button onClick={limparFiltro}>Limpar filtro</button>
          </section>
        )}
      </div>
    </>
  );
};

export default Filtro;
