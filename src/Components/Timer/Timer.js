import React, { useEffect, useState } from 'react';
import classes from './Timer.module.scss';

const Timer = ( props ) => {
  const { timeRef } = props;
  const [ time, setTime ] = useState(0);

  useEffect(() => {
    timeRef.current = time;
  })

  useEffect(() => {
    setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
  }, [setTime]);

  const format = (t) => {
    if (t >= 60) {
      const m = Math.floor(t / 60);
      let s = t % 60;

      s = s < 10 ? `0${s}` : s;

      return `${m}.${s}`;
    } else {
      if (t < 10) {
        return `0.0${t}`;
      }

      return `0.${t}`;
    }
  }

  return (
    <div className={classes.Timer}>
      Duration: {format(time)}
    </div>
  );
}

export default Timer;
