import * as constants from './constants';
import axios from 'axios'
import {fromJS} from 'immutable'


const changeList = (data) =>({
    type: constants.CHANGE_LIST,
    data: fromJS(data) // 将获取到的数据转为不可变对象再分发给reducer
})

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
}) ;

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});



// 通过thunk中间件，可以反回函数。
export const getList = () => {
    return (dispatch) => {
        axios.get('./api/headerList.json').then((res) =>{
            const data = res.data;
            dispatch(changeList(data.data))
        }).catch(() => {
            console.log('myerror')
        })
    }
}