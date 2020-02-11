import axios from 'axios';
import moment from "moment";

export const mainQueries = {
  getData: () => axios.get('http://sol-tst.herokuapp.com/api/v1/tasks/'),
};

export const getRestTime = (endAt) => {
  const end = moment(endAt);
  const now = moment();
  const date = moment(end - now)
  let days = date.diff(moment(0), 'days');
  let hours = date.diff(moment(0), 'hours') - days * 24;
  let minutes = date.diff(moment(0), 'minutes') - (days * 24 * 60) - hours * 60;
  let seconds = date.diff(moment(0), 'seconds') - (days * 24 * 60 * 60) - hours * 60 * 60 - minutes * 60;
  return [days, hours, minutes, seconds];
};

export const calcRestTime = (time) => {
  let res = [...time];
  if (res[1] - 1 === 0) {
    res[0] = res[0] - 1;
    res[1] = 24;
    res[2] = 60;
    res[3] = 60;
  } else if (res[1] - 1 === 0) {
    res[0] = res[0] - 1;
    res[1] = 24;
    res[2] = 60;
    res[3] = 60;
  } else if (res[2] - 1 === 0) {
    res[1] = res[1] - 1;
    res[2] = 60;
    res[3] = 60;
  } else if(res[3] - 1 === 0) {
      res[2] = res[2] - 1;
      res[3] = 60;
  }else{
    res[3] = res[3] - 1;
  }
  return res
};


let countId = 0;

export const  createId = () => {
  return countId++
};