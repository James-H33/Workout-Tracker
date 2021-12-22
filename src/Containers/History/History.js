import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { HistoryService } from '../../Services/History.service';
import classes from './History.module.scss';

const History = (props) => {
  const id = props.match.params.id;
  const { workouts } = useSelector(s => s);
  const [ history, setHistory ] = useState([]);
  const [ workout, setWorkout ] = useState({});

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

  return (
    <div>
      <h2 className={classes.Title}>History: {workout ? workout.title : ''}</h2>

      {
        history.map((h, i) => {
          return (
            <div className={classes.HistoryItem} key={i}>
              <li>
                <label>Date:</label>
                <div>{h.date}</div>
              </li>

              <li>
                <label>Duration:</label>
                <div>{h.duration}</div>
              </li>
            </div>
          )
        })
      }
    </div>
  )
}

export default History;
