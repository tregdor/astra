import React, {useEffect} from "react";
import injectSheet from 'react-jss';
import backgroundMain from '../images/background-screen.png';
import backgroundHeader from '../images/header.png';
import {mainQueries} from "../helperFuncrions";
import Timer from "../Timer/Timer";
import Loading from "../Loading/Loading";
import TaskBoard from "../TaskBoard/TaskBoard";

const classes = {
  root: {
    position: 'relative',
    width: '54%',
    height: '100vh',
    margin: '0 auto',
    background: `url(${ backgroundMain }) 50% 50% `,
    backgroundSize: 'cover'
  },
  header: {
    position: 'absolute',
    width: 680,
    margin: '0 auto',
    paddingTop: 15,
    zIndex: 5,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  timer: {}
};

const MainBlock = ({classes, date, responseIsOk, tasks,onCompleteTask, ...rest}) => {

  return (
    <div className={ classes.root }>
      { !responseIsOk && <Loading/> }
      { responseIsOk &&
      <>
        <div className={ classes.header }><img src={ backgroundHeader } alt=""/></div>
        <div className={ classes.timer }>
          <Timer date={ date }/>
        </div>
        <TaskBoard tasks={ tasks } onCompleteTask={onCompleteTask}/>
      </> }
    </div>
  )
};

export default injectSheet(classes)(MainBlock)