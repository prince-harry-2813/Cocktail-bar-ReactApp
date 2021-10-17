import React from "react";

const Item = ({ item }) => {
  const handleClick = () => {
    alert(item.strInstructions);
  };
  return (
    <div className="list-item">
      <div>{item.strDrink}</div>
      <div>
        <img
          onClick={handleClick}
          style={{
            cursor: "pointer",
            height: "120px ",
            width: "120px ",
            borderRadius: 22,
          }}
          src={item.strDrinkThumb}
          alt={item.strDrink}
        />
      </div>
    </div>
  );
};

export default Item;
