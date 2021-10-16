import React, { useEffect, useState } from "react";
import axios from "axios";
const Random = () => {
  const [random, setRandom] = useState(null);

  useEffect(() => {
    const getRandom = () => {
      axios
        .get("https://thecocktaildb.com/api/json/v1/1/random.php")
        .then((response) => {
          setRandom(response.data);
        })
        .catch((error) => {
          console.error("ERROR ", error);
        });
    };

    getRandom();
  }, []);
  const handleClick = () => {
    alert( "Instructions:\n"+random.drinks[0].strInstructions);
  };
  return (
    <div>
      {random && (
        <div className="random-drink">
          <h2>Drink of the day:</h2>
          <h3>{random.drinks[0].strDrink}</h3>
          <img
              onClick={handleClick}
            style={{
              cursor:"pointer",
              borderRadius: 25,
              height: "280px",
            }}
            src={random.drinks[0].strDrinkThumb}
            alt={random.drinks[0].strDrink}
          ></img>
        </div>
      )}
    </div>
  );
};

export default Random;
