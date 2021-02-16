const initialState = {
    loader: false,
    isError: false,
    message: ''
  };
  
  const config = (state = initialState, action) => {
    switch (action.type) {
      case 'REQUEST_START':
        return {
          ...state,
          loader: true,
          message: 'Requesting Signup.'
        };
      case 'RECEIVE_SUCCESS':
        if (action.response.data.status === 200) {
          return {
            ...state,
            loader: false,
            response: action.response.data.data,
            message: 'Signup successfull.'
          };
        } else {
          return {
            ...state,
            loader: false,
            isError: true,
            error:  action.response.data.error,
            message: action.response.data.message
          }
        }
      case 'RECEIVE_ERROR':
        return {
          ...state,
          loader: false,
          isError: true,
          error: action.error.message,
          message: 'Something wrong.'
        };
      default:
        return state;
    }
  }
  
  export default config;