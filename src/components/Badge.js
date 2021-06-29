import React from "react";
import Badge1 from "./svg/Badge1";
import Badge2 from "./svg/Badge2";
import Badge3 from "./svg/Badge3";

const Badge = ({ id }) => {
  switch (id) {
    case 0:
      return <Badge1 />;
    case 1:
      return <Badge2 />;
    case 2:
      return <Badge3 />;
    default:
      return <></>;
  }
};

export default Badge;
