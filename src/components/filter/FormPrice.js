import React, { useEffect, useState } from "react";
import WrapperFiltroSection from "../utilities/WrapperFiltroSection";
import classes from "./FormPrice.module.css";

const FormPrice = ({ setFilter }) => {
  const [prices, setPrices] = useState({ min: 0, max: 1000 });

  const handleChangeMin = ({ target }) => {
    setPrices((currVal) => ({ ...currVal, min: target.value }));
  };

  const handleChangeMax = ({ target }) => {
    setPrices((currVal) => ({ ...currVal, max: target.value }));
  };

  useEffect(() => {
    setFilter(prices);
  }, [setFilter, prices]);

  return (
    <WrapperFiltroSection title="Preço">
      <form className={classes.form}>
        <label htmlFor="check1">
          Min (R$)
          <input
            type="number"
            step="0.01"
            min="0"
            name="valor_min"
            id="min"
            value={prices.min}
            onChange={handleChangeMin}
          />
        </label>
        <label htmlFor="check1">
          Max (R$)
          <input
            type="number"
            step="0.01"
            name="valor_max"
            id="max"
            value={prices.max}
            onChange={handleChangeMax}
          />
        </label>
      </form>
    </WrapperFiltroSection>
  );
};

export default FormPrice;
