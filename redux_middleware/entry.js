
import {applyMiddleware,createStore} from 'redux'

const reducer = (initialState=0,action) =>{
  switch(action.type){
    case "INC":{
     return initialState +1
    }
    case "DEC":{
      return initialState -1
    }
    case "E":{
      throw new Error("AAAAAA!!!!!!")
    }
  }
  return initialState;
}

const logger = (store) => (next) => (action) =>{
  console.log("action fired",action);
  next(action);
}

const error = (store) => (next) => (action) =>{
  try{
  next(action);
  }catch(e){
    console.log("AHHHH!",e);
  }
}

const middleware = applyMiddleware(logger);

const store = createStore(reducer,1,middleware)

store.subscribe(() => {
  console.log("store changed",store.getState());
})

store.dispatch({type:"INC"})
store.dispatch({type:"INC"})
store.dispatch({type:"INC"})
store.dispatch({type:"DEC"})
store.dispatch({type:"DEC"})
store.dispatch({type:"E"})