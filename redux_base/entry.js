
import {combineReducers,createStore} from 'redux'

const userReducer = (state={},action) =>{
  switch(action.type){
    case "CHANGE_NAME":{
     state = {...state,name:action.payload}
     break
    }
    case "CHANGE_AGE":{
      state = {...state,age:action.payload}
      break
    }
  }
  return state;
}
const tweetsReducer = (state=[],action) =>{
  return state;
}

const reducers = combineReducers({
  user:userReducer,
  tweets:tweetsReducer,
})

const store = createStore(reducers,{
  user:{
    name:"Qiaolei",
    age:"23",
  },
  tweets:[]
});

store.subscribe(() => {
  console.log("store changed",store.getState());
})

store.dispatch({type:"CHANGE_NAME",payload:"Qiao"})
store.dispatch({type:"CHANGE_AGE",payload:"17"})
store.dispatch({type:"CHANGE_AGE",payload:"16"})