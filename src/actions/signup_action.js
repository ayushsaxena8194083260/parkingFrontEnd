import axios from '../redux/axios';

export const signup = (data) => dispatch => {
  
  dispatch({ type: "REQUEST_START" });
  return new Promise(resolve => {
    axios({
      method: 'post',
      url: '/api/signup',
      data: data
    })
      .then(response => {
        
        return resolve(dispatch({ type: "RECEIVE_SUCCESS", response }));
      })
      .catch(error => {
        return resolve(dispatch({ type: "RECEIVE_ERROR", error }));
      })
  });
};


export const notification = (data) => dispatch => {
  
  dispatch({ type: "REQUEST_START" });
  return new Promise(resolve => {
    axios({
      method: 'post',
      url: '/api/notification',
      data: data
    })
      .then(response => {
        
        return resolve(dispatch({ type: "RECEIVE_SUCCESS", response }));
      })
      .catch(error => {
        return resolve(dispatch({ type: "RECEIVE_ERROR", error }));
      })
  });
};
