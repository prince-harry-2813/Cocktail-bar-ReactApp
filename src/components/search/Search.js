import React, { useState, useEffect, useRef } from "react";
import Item from "./Item";
import axios from "axios";
const INITAIAL_STATE = {
  term: "",
};
const Search = () => {
  const [values, setValues] = useState(INITAIAL_STATE);

  const [responseData, setResponseData] = useState({});

  const inputRef = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  useEffect(() => {
    const timersout = setTimeout(() => {
      if (values.term) {
        runSearch(values.term);
      }
    }, 666);
    return () => {
      clearTimeout(timersout);
    };
  }, [values.term]);

  const handleSubmit = (event) => {
    event.preventDefault();
    runSearch(values.term);
  };

  const runSearch = (term) => {
    axios
      .get(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${term}`)
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
    // .finally(() => {
    //   setValues(INITAIAL_STATE);
    // });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="search">
        <input
          ref={inputRef}
          onChange={handleChange}
          type="text"
          name="term"
          className="search-input"
          placeholder="Search cocktails..."
          value={values.term}
          autoComplete="off"
        />
      </form>
      {responseData.drinks &&
        responseData.drinks
          .slice(0, 5)
          .map((item) => <Item key={item.idDrink} item={item}/>)}
    </>
  );
};

export default Search;
