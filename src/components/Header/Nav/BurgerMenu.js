import React from "react";

/* Props from Nav component */
const BurgerMenu = ({ toggled, setToggled }) => {
  const toggleMenu = () => {
    setToggled(!toggled);
  };

  return (
    <div
      className={`burger-icon ${toggled ? "burger-toggled" : ""}`}
      onClick={toggleMenu}
      aria-label="Menu"
      role="button"
      aria-controls="navigation"
    >
      {[1, 2, 3].map((i) => (
        <div className={`burger-line-${i}`} key={i}></div>
      ))}
    </div>
  );
};

export default BurgerMenu;
