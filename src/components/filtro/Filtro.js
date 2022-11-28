import React, { useCallback, useContext, useRef, useState } from "react";
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
  const refBtnFiltro = useRef();
  const { menuVisible, setMenuVisible } = useVisibility(refBtnFiltro);
  const { saveFilter, initialFilter } = useContext(FilterContext);

  const [filter, setFilter] = useState(initialFilter);

  const setFilterPrices = useCallback((prices) => {
    setFilter((currVal) => ({ ...currVal, prices }));
  }, []);

  const setFilterColors = useCallback((colors) => {
    setFilter((currVal) => ({ ...currVal, colors }));
  }, []);

  const setFilterCategories = useCallback((categories) => {
    setFilter((currVal) => ({ ...currVal, categories }));
  }, []);

  const btnFiltro = (
    <button
      className={`${classes.btnOpenFilter} ${
        menuVisible ? classes.filtroVisible : ""
      }`}
      aria-label="Abrir filtro"
      type="button"
      onClick={() => setMenuVisible(true)}
    >
      <IconFiltro />
    </button>
  );

  const applyFilter = () => {
    saveFilter(filter);
  };

  const cleanFilter = () => {
    saveFilter(initialFilter);
  };

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
            <FormCategoria setFilter={setFilterCategories} />
            <FormCores setFilter={setFilterColors} />
            <FormPreco setFilter={setFilterPrices} />

            <WrapperButton className={classes.btn} onClick={applyFilter}>
              Aplicar filtro
            </WrapperButton>
            <button onClick={cleanFilter} className={classes.btnLimpar}>
              Limpar filtro
            </button>
          </section>
        )}
      </div>
    </>
  );
};

export default Filtro;
