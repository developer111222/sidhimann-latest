import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  
    })
    
    let inialState = {
    }
    
    const middleware = [thunk];
    // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    
    const store = createStore(
      reducer,
      inialState,
      applyMiddleware(...middleware)
     // composeWithDevTools(applyMiddleware(...middleware))
    );
    export default store;