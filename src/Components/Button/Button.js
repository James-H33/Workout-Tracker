import React from "react";
import classes from "./Button.module.scss";
import LoadingIcon from '../LoadingIcon/LoadingIcon';

const Button = (props) => {
  const isLoading = props.isLoading || false;
  const buttonTextStyle = isLoading ? classes.ButtonTextLoading : classes.ButtonText;

  return (
    <button onClick={props.click} className={classes.Button}>
      <span className={buttonTextStyle}>
        {props.children}
      </span>

      {
        isLoading &&
        <span className={classes.ButtonLoader}>
          <LoadingIcon />
        </span>
      }
    </button>
  );
};

export default Button;
