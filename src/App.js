import React, {useState} from 'react';
import './App.css';
import injectSheet from 'react-jss';
import sideBg from "./components/images/side-bg.jpg";
import './index.css';
import MainBlock from "./components/main/MainBlock";
import {mainQueries} from "./components/helperFuncrions";

const classes = {
  root: {
    width: '100vw',
    height: '100vh',
    background: `url(${ sideBg }) 50% 50% `,
    backgroundSize: 'cover',
    fontFamily: 'Roboto'
  },
};

const App = ({classes, ...rest}) => {
  let [data, setData] = useState({tasks: 0, endsAt: undefined});
  let [responseIsOk, setResponseIsOk] = useState(false);
  let [tasks, setTasks] = useState(0);
  let [endsAt, setEndsAt] = useState(0);

  if (!responseIsOk) {
    mainQueries.getData().then((response) => {
      if (response.status === 200) {
        setTasks(response.data.tasks);
        setEndsAt(response.data.endsAt);
        setResponseIsOk(true);
      }
    });
  }
  const onCompleteTask = (id) => {
    setTasks(tasks.filter((item,idx) => idx !== id))
  };
  return (
    <div className={ classes.root }>
      <MainBlock date={ endsAt } responseIsOk={ responseIsOk } tasks={ tasks } onCompleteTask={onCompleteTask}/>
    </div>
  );
};

export default injectSheet(classes)(App);
