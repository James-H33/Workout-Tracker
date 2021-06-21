import React, { useState, Fragment } from 'react';
import { useHistory } from "react-router-dom";
import classes from './WorkoutCard.module.scss';
import Backdrop from '../../Backdrop/Backdrop';

import Expander from '../../Expander/Expander';

const WorkoutCard = (props) => {
  const history = useHistory();
  const [state, setState]  = useState({
    isExpanderOpen: false
  })

  const navigate = () => {
    history.push(`/workout/${props.id}`);
  }

  const onExpanderOpened = (isActive) => {
    setState({ isExpanderOpen: isActive });
  }

  const onBackdropClicked = (isActive) => {
    setState({ isExpanderOpen: isActive });
  }

  const wrapperClasses = [classes.Wrapper, state.isExpanderOpen ? classes.WrapperActive : ''].join( ' ' );

  return (
    <Fragment>
      <Backdrop
        isActive={state.isExpanderOpen}
        onDeactivate={() => onBackdropClicked(false)}
      />

      <div className={wrapperClasses}>
        <div className={classes.Expander}>
          <Expander
            isActive={state.isExpanderOpen}
            delete={props.delete}
            open={onExpanderOpened}
          />
        </div>

        <div onClick={navigate}>
          <label>{props.title}</label>

          <ul>
            {props.exercises.map((e, i) => <li key={e.id}>{e.title}</li>)}
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default WorkoutCard;
