import React, { useEffect, useState } from "react";
import WrapperFiltroSection from "../utilities/WrapperFiltroSection";
import classes from "./FormCategory.module.css";

const categories = ["flores", "cactos", "outros"];

const FormCategory = ({ setFilter, filterVal }) => {
  const [selectedCategories, setSelectedCategories] = useState(filterVal);

  const handleChange = ({ target }) => {
    if (target.checked) {
      setSelectedCategories([...selectedCategories, target.value]);
    } else {
      setSelectedCategories((currValue) => {
        return currValue.filter((val) => val !== target.value);
      });
    }
  };

  useEffect(() => {
    setFilter(selectedCategories);
  }, [selectedCategories, setFilter]);

  useEffect(() => {
    setSelectedCategories(filterVal);
  }, [filterVal]);

  return (
    <WrapperFiltroSection title="Categorias">
      <form className={classes.form}>
        {categories.map((category) => (
          <div className={classes.divInput} key={category}>
            <input
              type="checkbox"
              name="categoria"
              id={category}
              value={category}
              onChange={handleChange}
              checked={selectedCategories.includes(category)}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </form>
    </WrapperFiltroSection>
  );
};

export default FormCategory;
