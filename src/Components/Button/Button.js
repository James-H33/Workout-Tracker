import React from "react";
import classes from "./Button.module.scss";
import LoadingIcon from '../LoadingIcon/LoadingIcon';

const getButtonStyleType = ( type ) => {
  if (type === 1) {
    return classes.SecondaryButton;
  }

  return classes.Button;
}

const Button = ( props ) => {
  const { click, isLoading, styleType } = props;
  const buttonStyleClass = getButtonStyleType(styleType);
  const buttonTextStyle = isLoading ? classes.ButtonTextLoading : classes.ButtonText;

  return (
    <button onClick={click} className={buttonStyleClass}>
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
