import {applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
// const logger = (store) => (next) => (action) =>{
//     console.log('action fired:' + action.type);
//     next(action);
// }

// const error = (store) => (next) => (action) =>{
//     try{
//         next(action);
//     }catch(e){
//         console.log('error:' + e);
//     }
// }

const middleware = applyMiddleware(thunk,logger());

const userReducer = (state = { name: 'default', age: 0 }, action) => {
    const type = action.type;
    const val = action.val;
    switch (type) {
        case 'CHANGE_NAME':{
            state = Object.assign({},state,{name:val});
            break
        }
        case 'CHANGE_AGE':
            state = Object.assign({},state,{age:val});
            break
    }
    return state;
}

const tweetReducer = (state = [], action) => {
    return state;
}

const reducers = combineReducers({
    users: userReducer,
    tweets: tweetReducer,
})

const store = createStore(reducers,{},middleware);

store.subscribe(() => {
    console.log('store changed', store.getState())
})

// console.log('entry');
// store.dispatch({ type: 'DEC', num: 3 });
// store.dispatch({ type: 'CHANGE_NAME', val: 'qiao' });
// store.dispatch({ type: 'CHANGE_AGE', val: 17 });
// store.dispatch({ type: 'DEC', val: 3 });
// store.dispatch({ type: 'DEC', val: 100 });
// store.dispatch({ type: 'CHANGE_NAME', val: 'lei' });
store.dispatch((dispatch) =>{
    dispatch({ type: 'CHANGE_NAME', val: 'qiao' });
    dispatch({ type: 'CHANGE_NAME', val: 'lei' });
})