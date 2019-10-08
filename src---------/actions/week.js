import {createAction} from 'redux-actions';
import {week_choice}  from '@api/goods'
const WEEK_ACTION = createAction("week_action",data=>data);

export const WEEK_ACTION_ASYNC = (cityId,page)=>{
    return async (dispatch)=>{
        let data = await week_choice(cityId,page);
        dispatch(WEEK_ACTION(data));
        if(data)return true;
    }
}