import React, { useState, useRef } from 'react';
import Button from '../Button';
import classes from './RippleButton.module.scss';

const RippleButton = ( props ) => {
  const [ state, setState ] = useState(false);
  const rippleRef = useRef(null);

  const click = (e) => {
    const button = rippleRef.current.closest('button');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    rippleRef.current.style.left = `${e.clientX - (button.offsetLeft + (radius / 2))}px`;
    rippleRef.current.style.top = `${e.clientY - (button.offsetTop + (radius / 2))}px`;

    rippleRef.current.style.height = radius + 'px';
    rippleRef.current.style.width = radius + 'px';

    setTimeout(() => {
      setState(false);
    }, 500);

    setState(true);

    props.click();
  }

  return (
    <Button { ...props } click={click}>
      <span ref={rippleRef} className={state ? classes.Ripple : ''}></span>
      {props.children}
    </Button>
  );
}

export default RippleButton;
