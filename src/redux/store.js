import { applyMiddleware, createStore } from 'redux';
import rootreducer from './rootReducer';
import thunk from 'redux-thunk';
import { createLogger } from "redux-logger";

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const store = createStore(rootreducer, applyMiddleware(...middleware));

export default store;