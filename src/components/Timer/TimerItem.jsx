import React from "react";
import injectSheet from 'react-jss';

const classes = {
  root:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'right',
    color: '#fff',
  },
  value:{
    fontSize: 30,
    fontWeight: 'bold',
  },
  text:{
    fontSize: 12,
  }

};

const TimerItem = ({classes,text,value,...rest}) => {
  return (
    <div className={classes.root}>
      <div className={classes.value}>{value}</div>
      <div className={classes.text}>{text}</div>
    </div>
  )
};

export default injectSheet(classes)(TimerItem)