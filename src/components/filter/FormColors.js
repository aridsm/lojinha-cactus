import React, { useEffect, useState } from "react";
import WrapperFiltroSection from "../utilities/WrapperFiltroSection";
import classes from "./FormColors.module.css";

const colors = [
  {
    colorName: "rosa",
    bg: "#FE96C2",
    hex: "#570B2B",
  },
  {
    colorName: "verde",
    bg: "#7FD878",
    hex: "#245320",
  },
  {
    colorName: "laranja",
    bg: "#F4B770",
    hex: "#563309",
  },
  {
    colorName: "azul",
    bg: "#96C0FE",
    hex: "#1F3556",
  },
  {
    colorName: "vermelho",
    bg: "#F56F6B",
    hex: "#520F0F",
  },
  {
    colorName: "roxo",
    bg: "#B796FE",
    hex: "#2A1B4A",
  },
  {
    colorName: "amarelo",
    bg: "#F1F371",
    hex: "#4A4B0A",
  },
  {
    colorName: "preto",
    bg: "#5C5C5C",
    color: "#FFFFFF",
  },
  {
    colorName: "branco",
    bg: "#FFFFFF",
    color: "#2C2C2C",
  },
];

const FormCores = ({ setFilter, filterVal }) => {
  const [selectedColors, setSelectedColors] = useState([]);

  //Trocar cores selecionadas
  const handleChange = ({ target }) => {
    if (target.checked) {
      setSelectedColors([...selectedColors, target.value]);
    } else {
      setSelectedColors((currValue) => {
        return currValue.filter((val) => val !== target.value);
      });
    }
  };

  useEffect(() => {
    setFilter(selectedColors);
  }, [setFilter, selectedColors]);

  useEffect(() => {
    setSelectedColors(filterVal);
  }, [filterVal]);

  return (
    <WrapperFiltroSection title="Cores">
      <form className={classes.listColors}>
        {colors.map((item) => (
          <div
            className={`${classes.colorItem} ${
              selectedColors.includes(item.colorName) ? classes.checked : ""
            }`}
            key={item.colorName}
          >
            <label
              htmlFor={item.colorName}
              style={{ backgroundColor: item.bg, color: item.hex }}
              className={classes.btnColor}
              title={item.colorName}
            >
              <span>{item.colorName}</span>
            </label>
            <input
              type="checkbox"
              name="colors"
              id={item.colorName}
              value={item.colorName}
              onChange={handleChange}
              checked={selectedColors.includes(item.colorName)}
            />
          </div>
        ))}
      </form>
    </WrapperFiltroSection>
  );
};

export default FormCores;
