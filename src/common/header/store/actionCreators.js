import * as constants from './constants';
import axios from 'axios'
import {fromJS} from 'immutable'


const changeList = (data) =>({
    type: constants.CHANGE_LIST,
    data: fromJS(data), // 将获取到的数据转为不可变对象再分发给reducer
    totalPage: Math.ceil(data.length/10) //10个一页的总页数
    
})

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
}) ;

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
});

export const changePage= (page) => ({
    type: constants.CHANGE_PAGE,
    page:page
});



// 通过中间件对dispatch封装升级，可以反回函数。
export const getList = () => {
    return (dispatch) => {
        axios.get('./api/headerList.json').then((res) =>{
            const data = res.data;
            dispatch(changeList(data.data));            
        }).catch(() => {
            console.log('myError')
        })
    }
}