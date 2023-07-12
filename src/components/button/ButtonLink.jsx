import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const ButtonLink = ({
  children,
  path,
  primary,
  secondary,
  success,
  onClick,
}) => {
  return (
    <Link
      onClick={onClick}
      to={path}
      className={
        (primary && "button primary") ||
        (secondary && "button secondary") ||
        (success && "button success") ||
        "button"
      }
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
