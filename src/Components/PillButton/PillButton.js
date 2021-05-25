import React from 'react';
import classes from './PillButton.module.scss';

const PillButton = ( props ) => {
  const variantMap = {
    'secondary': classes.Secondary,
  }

  const clicked = () => {
    props.click();
  }

  const componentClasses = [classes.PillButton, variantMap[props.variant]].join(' ');

  return (
    <div className={componentClasses} onClick={clicked}>
      {props.children}
    </div>
  );
}

export default PillButton;
