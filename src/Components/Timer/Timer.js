import React, { useEffect, useState } from 'react';
import classes from './Timer.module.scss';
import { convertTimeFromDates, formatTimeFromSeconds } from '../../util/utils';

const Timer = ( props ) => {
  const { timeRef } = props;
  const [ time, setTime ] = useState(0);

  useEffect(() => {
    timeRef.current = new Date().valueOf();
  }, [timeRef])

  useEffect(() => {
    let timer = setInterval(() => {
      setTime((t) => convertTimeFromDates(timeRef.current));
    }, 200);

    return () => clearInterval(timer);
  }, [setTime, timeRef]);

  const format = (t) => {
    return formatTimeFromSeconds(t);
  }

  return (
    <div className={classes.Timer}>
      Duration: {format(time)}
    </div>
  );
}

export default Timer;
