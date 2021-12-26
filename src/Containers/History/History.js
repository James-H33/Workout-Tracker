import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { HistoryService } from '../../Services/History.service';
import classes from './History.module.scss';
import { formatTimeFromSeconds } from '../../util/utils';

const History = (props) => {
  const id = props.match.params.id;
  const { workouts } = useSelector(s => s);
  const [ history, setHistory ] = useState([]);
  const [ workout, setWorkout ] = useState(null);

  useEffect(() => {
    HistoryService.getHistory(id)
      .then(response => {
        setHistory(response);
      });
  }, [id]);

  useEffect(() => {
    const targetWorkout = workouts.find(w => w.id === id);
    setWorkout(targetWorkout);
  }, [workouts, id]);

  const title = workout ? workout.title : '';

  return (
    <div>
      <h2 className={classes.Title}>History</h2>

      <div className={classes.ExerciseSummary}>
        <label className={classes.Label}>Workout Summary</label>

        <ul>
          {
            workout && workout.exercises.map(e => <li>{e.title}</li>)
          }
        </ul>
      </div>

      <label className={classes.Label}>Recent:</label>
      {
        history.map((h, i) => {
          return (
            <div className={classes.HistoryItem} key={i}>
              <h4>{title}</h4>

              <li>
                <label>Date:</label>
                <div>{h.date}</div>
              </li>

              <li>
                <label>Duration:</label>
                <div>{formatTimeFromSeconds(h.duration)}</div>
              </li>
            </div>
          )
        })
      }
    </div>
  )
}

export default History;
