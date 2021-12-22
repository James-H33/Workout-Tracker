import React from 'react';
import classes from './Expander.module.scss';
import ellipse from '../../Assets/ellipse.svg';

const styleBuilder = (flag, activeClasses, inactiveClasses) => {
  return (flag ? activeClasses : inactiveClasses).join(' ');
}

const Expander = (props) => {
  const isExpanded = props.isActive || false;
  const inlineStyles = props.inlineStyles || {};

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

  const wrapperStyles = styleBuilder(
    isExpanded,
    [classes.WrapperActive, classes.Wrapper],
    [classes.Wrapper]
  );

  return (
    <div className={wrapperStyles}>
      <div className={btnStyles} onClick={open}>
        <img src={ellipse} alt="..." />
      </div>
      {
        <div className={itemContainerStyle} style={inlineStyles}>
          {props.children}
        </div>
      }
    </div>
  );
}

export default Expander;
