import React from "react";
import injectSheet from 'react-jss';
import kingImage from '../../images/task-kings.png'
import timeImage from '../../images/task-time.png'
import tournamentsImage from '../../images/task-tournaments.png'


const classes = {
  root: {
    width: '85%',
    height: '23%',
    display: 'grid',
    gridTemplateColumns: '1fr 3fr 1fr',
    margin: '0 auto',
  },
  image: {
    '& img':{
      transform: 'rotate(15deg)'
    }
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '0 0 20px'
  },
  text: {
    width: '80%',
    fontSize: 24,
    lineHeight: 1.5,
    fontWeight: 'bold',
  },
  complete: {
    width: 150,
    height: 25,
    marginTop: 80,
    border: '3px solid black',
    borderRadius: 5,
    fontSize: 14,
    fontWeight: 'bold',
    background: '#ffe873',
    textAlign: 'center',
    paddingTop: 9,
    cursor: 'pointer'
  },
  progress: {
    display: 'block',
    width: '90%',
    borderRadius: 5,
    '&::-webkit-progress-bar':{
      borderRadius: 15,

    },
    '&::-webkit-progress-value': {
      borderRadius: 15,
      background: '#acff93',
      transitionDuration: '1s',
    },

  }
};

const Task = ({classes, data,id,onCompleteTask, ...rest}) => {
  let img, text, progress;

  if (data.type === 'kings') {
    img = kingImage;
    text = 'Выйграть три игры, разложив всех королей'
  } else if (data.type === 'time') {
    img = timeImage;
    text = 'Выйграть три игры, каждую менее чем за 3 минуты'
  } else {
    img = tournamentsImage;
    text = 'Выйграть пять турниров подряд';
  }

  return (
    <div className={ classes.root }>
      <div className={ classes.image }><img src={ img } alt=""/></div>

      <div className={ classes.info }>
        <div className={ classes.text }>{ text }</div>
        <progress max={ 100 } value={ data.progress } className={ classes.progress }/>
      </div>

      {data.progress === 100 && <div className={ classes.complete } onClick={() => onCompleteTask(id)}>Поставить рубашку</div> }
    </div>
  )
};

export default injectSheet(classes)(Task)