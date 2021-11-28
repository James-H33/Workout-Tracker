import React from 'react';
import classes from './Checkbox.module.scss';
import Checkmark from '../../Assets/checkmark.png';

const Checkbox = ( props ) => {
  const checked = props.checked || false;
  const style = checked ? classes.CheckboxActive : classes.Checkbox;

  console.log(checked);

  return (
    <div className={style}>
      <label onClick={(e) => props.changed(e)}>
        <img src={Checkmark} alt="" />
      </label>
    </div>
  );
}

export default Checkbox;
