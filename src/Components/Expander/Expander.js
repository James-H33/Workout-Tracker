import React from 'react';
import classes from './Expander.module.scss';

const styleBuilder = (flag, activeClasses, inactiveClasses) => {
  return (flag ? activeClasses : inactiveClasses).join(' ');
}

const Expander = (props) => {
  const isExpanded = props.isActive || false;

  const open = () => {
    props.open(true);
  }

  const btnStyles = styleBuilder(
    isExpanded,
    [classes.ExpanderBtn, classes.ExpanderBtnInactive],
    [classes.ExpanderBtn]
  );

  const itemContainerStyle = styleBuilder(
    isExpanded,
    [classes.ItemContainerActive, classes.ItemContainer],
    [classes.ItemContainer]
  );

  return (
    <div className={classes.Wrapper}>
      <div className={btnStyles} onClick={open}>...</div>
      {
        <div className={itemContainerStyle}>
          <div onClick={props.delete}>Delete</div>
        </div>
      }
    </div>
  );
}

export default Expander;
