import React, { useContext } from "react";
import classes from "./SearchField.module.css";
import { ReactComponent as IconSearch } from "../../assets/search.svg";
import WrapperButton from "../utilities/WrapperButton";
import { FilterContext } from "../../context/FilterContext";

const SearchField = () => {
  const { saveInputSearchVal } = useContext(FilterContext);
  const searchHandler = (e) => {
    e.preventDefault();

    const inputValue = e.target.search.value.toLowerCase().trim();

    saveInputSearchVal(inputValue);
  };

  return (
    <form className={classes.form} onSubmit={searchHandler}>
      <label htmlFor="search">Pesquise aqui</label>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="O que você procura?"
      />
      <WrapperButton className={classes.btn}>
        <IconSearch className={classes.iconSearch} />
      </WrapperButton>
    </form>
  );
};

export default SearchField;
