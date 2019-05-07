import axios from 'axios';
import  {fromJS} from  'immutable';
import * as constants from './constants';

const changeDetail = (x,y) => ({
    type: constants.CHANGE_DETAIL,
    title: x,
    content: y
});

export const getDetailAction = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then((res) =>{
            const result = res.data.data
            dispatch(changeDetail(result.title, result.content))
            
        })
    }
}