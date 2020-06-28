import axios from 'axios';
import  {fromJS} from  'immutable';
import * as constants from './constants';

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    WriterList: result.WriterList 
});
const addHomeList = (result,nextPage) => ({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(result),
    nextPage
});


export const getHomeInfo = () =>{
    return (dispatch) => {
        axios.get(`${window.beforeRoute}/api/home.json`).then((res)=>{
            const result=res.data.data;
            // const action = changeHomeData(result)           
            // dispatch(action);              
            dispatch(changeHomeData(result));
        }).catch(() => {
            console.log('get home data error');
        }); 
    }
}

export const getMoreList = (page) => {
    return (dispatch) =>{
        axios.get(`${window.beforeRoute}/api/homeList.json?page=` + page).then((res)=>{
            const result=res.data.data;                      
           dispatch(addHomeList(result, page + 1 ))
        }).catch(() => {
            console.log('get homeMore data error');
        }); 
    }
}

export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_ACROLL_TOP,
    show: show
})