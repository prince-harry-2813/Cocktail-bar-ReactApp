import React from "react";

const Footer = () => {
  return (
    <div
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <label>
        this site developed by{" "}
        {
          <a href={"https://www.linkedin.com/in/arie-rosental"}>
            Arie Rosental
          </a>
        }
      </label>
    </div>
  );
};

export default Footer;
