import React, {Component, useEffect, useState} from "react";
import injectSheet from 'react-jss';
import {calcRestTime, getRestTime} from "../helperFuncrions";
import * as PropTypes from "prop-types";
import TimerItem from "./TimerItem";

const classes = {
  root: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-between',
    top: 130,
    left: '47%',
    transform: 'translateX(-50%)'
  }
};

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restTime: getRestTime(this.props.date),
    };
  }

  componentDidMount (){
    this.time = setInterval(() => {
      this.setState({
        restTime: calcRestTime(this.state.restTime)
      });
    }, 1000);
  }
  componentWillUnmount (){
    clearInterval(this.time)
  }

  render (){
    const state = this.state;
    return (
      <div className={this.props.classes.root }>
        <TimerItem value={state.restTime[0]} text={'дней'}/>
        <TimerItem value={`:${state.restTime[1]}`} text={'часов'}/>
        <TimerItem value={`:${state.restTime[2]}`} text={'минут'}/>
        <TimerItem value={`:${state.restTime[3]}`} text={'секунд'}/>
      </div>
    )
  }
}

export default injectSheet(classes)(Timer)