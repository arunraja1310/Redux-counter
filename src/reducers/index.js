
import { combineReducers } from 'redux';
import {INCREMENT_COUNTER} from '../actions';

const intialstate={
    count:0
};
const reducer=(state=intialstate,action)=>{
    console.log('reducer running',action,'state',state,'INCRE',INCREMENT_COUNTER);

    switch (action.type){
        case INCREMENT_COUNTER: {
            return Object.assign({}, state, {count: state.count + 1})
        }
        default:
            return state;
    }

}

const myReducer = combineReducers({
    reducer
})

export default myReducer