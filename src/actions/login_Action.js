import axios from '../redux/axios';

export const login = (data) => dispatch => {
  
  dispatch({ type: "REQUEST_START" });
  return new Promise(resolve => {
    axios({
      method: 'post',
      url: '/api/login',
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



export const forgotPassword = (data) => dispatch => {
  dispatch({ type: "REQUEST_START" });
  return new Promise(resolve => {
    axios({
      method: 'post',
      url: '/api/forgotPasswordOTP',
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


export const resetPassword = (data) => dispatch => {
  
  dispatch({ type: "REQUEST_START" });
  return new Promise(resolve => {
    axios({
      method: 'post',
      url: `/api/reset-password`,
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
export const otpVerification = (data) => dispatch => {
  dispatch({ type: "REQUEST_START" });
  return new Promise(resolve => {
    axios({
      method: 'post',
      url: `/api/verifyForgotPasswordOTP`,
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