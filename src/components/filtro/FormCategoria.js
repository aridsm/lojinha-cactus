import React, { useState } from "react";
import WrapperFiltroSection from "../utilities/WrapperFiltroSection";
import classes from "./FormCategoria.module.css";

const categorias = ["flores", "cactos", "outros"];

const FormCategoria = () => {
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState([]);

  const handleChange = ({ target }) => {
    if (target.checked) {
      setCategoriasSelecionadas([...categoriasSelecionadas, target.value]);
    } else {
      console.log(target.value);
      setCategoriasSelecionadas((currValue) => {
        return currValue.filter((val) => val !== target.value);
      });
    }
  };

  return (
    <WrapperFiltroSection title="Categorias">
      <form className={classes.form}>
        {categorias.map((categoria) => (
          <label htmlFor={categoria}>
            {categoria}
            <input
              type="checkbox"
              name="categoria"
              id={categoria}
              value={categoria}
              onChange={handleChange}
              checked={categoriasSelecionadas.includes(categoria)}
            />
          </label>
        ))}
      </form>
    </WrapperFiltroSection>
  );
};

export default FormCategoria;
