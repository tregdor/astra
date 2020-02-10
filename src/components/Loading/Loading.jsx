import React from "react";
import injectSheet from 'react-jss';
import spinner from '../images/spinner.gif';

const classes = {
  root:{
    width: 200,
    height: 200,
  }
};

const Loading = ({classes,...rest}) => {
  return (
    <div className={classes.root}>
      <img src={spinner} alt='loading'/>
    </div>
  )
};

export default injectSheet(classes)(Loading)