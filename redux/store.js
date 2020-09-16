import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import dataReducer from './reducer';


const initStore = () => {
    return createStore(dataReducer, applyMiddleware(thunk));
  }
  
const wrapper = createWrapper(initStore)

export default wrapper;