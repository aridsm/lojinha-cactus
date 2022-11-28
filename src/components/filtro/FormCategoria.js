import React, { useEffect, useState } from "react";
import WrapperFiltroSection from "../utilities/WrapperFiltroSection";
import classes from "./FormCategoria.module.css";

const categorias = ["flores", "cactos", "outros"];

const FormCategoria = ({ setFilter }) => {
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState([]);

  const handleChange = ({ target }) => {
    if (target.checked) {
      setCategoriasSelecionadas([...categoriasSelecionadas, target.value]);
    } else {
      setCategoriasSelecionadas((currValue) => {
        return currValue.filter((val) => val !== target.value);
      });
    }
  };

  useEffect(() => {
    setFilter(categoriasSelecionadas);
  }, [categoriasSelecionadas, setFilter]);

  return (
    <WrapperFiltroSection title="Categorias">
      <form className={classes.form}>
        {categorias.map((categoria) => (
          <div className={classes.divInput} key={categoria}>
            <input
              type="checkbox"
              name="categoria"
              id={categoria}
              value={categoria}
              onChange={handleChange}
              checked={categoriasSelecionadas.includes(categoria)}
            />
            <label htmlFor={categoria}>{categoria}</label>
          </div>
        ))}
      </form>
    </WrapperFiltroSection>
  );
};

export default FormCategoria;
