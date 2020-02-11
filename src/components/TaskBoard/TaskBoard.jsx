import React from "react";
import injectSheet from 'react-jss';
import Task from "./Task/Task";
import background from '../images/background.png'

const classes = {
  root:{
    position: 'absolute',
    width: '80%',
    height: '60%',
    paddingTop: 170,
    paddingLeft: 15,
    background: `url(${background}) 50% 50% no-repeat`,
    backgroundSize: 'contain',
    top: 140,
    left: '50%',
    transform: 'translateX(-50%) ',
  }
};

const TaskBoard = ({classes,tasks,onCompleteTask,...rest}) => {
  const tasksItems = tasks.map((item) => {

    return <Task key={item.id}  data={item} id={item.id} onCompleteTask={onCompleteTask}/>
  });
  console.log(tasks);
  return (
    <div className={classes.root}>
      {tasksItems}
    </div>
  )
};

export default injectSheet(classes)(TaskBoard)