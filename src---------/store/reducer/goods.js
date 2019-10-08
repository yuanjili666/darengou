import {handleActions} from 'redux-actions';

const defaultState = {
    week_choice:[],
    cityId:140,
    page:0
}


export default handleActions({
    week_action:(state,action)=>{
       let newWeekState = Object.assign({},state);
       newWeekState.week_choice = [... newWeekState.week_choice,...action.payload];
       newWeekState.page++;
       return newWeekState;
    }
},defaultState)