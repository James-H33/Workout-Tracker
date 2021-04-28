import React, { useState } from 'react';
import classes from './Expander.module.scss';

const styleBuilder = (flag, activeClasses, inactiveClasses) => {
  return (flag ? activeClasses : inactiveClasses).join(' ');
}

const Expander = (props) => {

  const [state, setState]  = useState({
    isExpanded: false
  })

  const open = () => {
    setState({ isExpanded: true });
  }

  const close = () => {
    setState({ isExpanded: false });
  }

  const btnStyles = styleBuilder(
    state.isExpanded,
    [classes.ExpanderBtn, classes.ExpanderBtnInactive],
    [classes.ExpanderBtn]
  );

  const itemContainerStyle = styleBuilder(
    state.isExpanded,
    [classes.ItemContainerActive, classes.ItemContainer],
    [classes.ItemContainer]
  );

  return (
    <div className={classes.Wrapper}>
      <div className={btnStyles} onClick={open}>...</div>

      {
        <div className={itemContainerStyle} onClick={close}>
          <div onClick={props.edit}>Edit</div>
          <div onClick={props.delete}>Delete</div>
        </div>
      }
    </div>
  );
}

export default Expander;
