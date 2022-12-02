import React, { useContext } from "react";
import { FilterContext } from "../../../context/FilterContext";
import { ReactComponent as IconX } from "../../../assets/x.svg";
import classes from "./FilterTags.module.css";

const FilterTags = () => {
  const { filter, deleteColor, deleteCategory, deleteInputSearchVal } =
    useContext(FilterContext);

  return (
    <>
      {filter.name && (
        <p className={classes.searchName}>
          <button onClick={deleteInputSearchVal} title="excluir pesquisa">
            <IconX />
          </button>{" "}
          Resultados para "{filter.name}"
        </p>
      )}
      {(filter.colors.length !== 0 || filter.categories.length !== 0) && (
        <ul className={classes.filterList}>
          {filter.colors.map((color) => (
            <li key={color}>
              {color}{" "}
              <button
                title={`excluir filtro para a cor ${color}`}
                onClick={() => deleteColor(color)}
              >
                <IconX />
              </button>
            </li>
          ))}
          {filter.categories.map((category) => (
            <li key={category}>
              {category}{" "}
              <button
                title={`excluir filtro da categoria ${category}`}
                onClick={() => deleteCategory(category)}
              >
                <IconX />
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FilterTags;
