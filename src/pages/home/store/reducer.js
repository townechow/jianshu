import  {fromJS} from  'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    topicList: [ ],
    articleList: [ ],
    recommendList: [ ],
    WriterList: [ ],
    aticelPage: 1 ,
    showScroll: false
});

const changeHomeData = ( state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList:fromJS(action.recommendList),
        WriterList: fromJS(action.WriterList)
    });   
}

export default (state = defaultState, action) => {
   switch(action.type) {
        case constants.CHANGE_HOME_DATA:
        console.log('reducer:',action)
            return changeHomeData (state, action);

        case constants.ADD_ARTICLE_LIST:
            // return state.set('articleList',state.get('articleList').concat(action.list));
            return state.merge({
                'articleList':state.get('articleList').concat(action.list),
                'aticelPage': action.nextPage
            });
            // case2、case3也应该像case1一样封装优化代码，但此处为了了解多种表达方式暂不优化。
        case constants.TOGGLE_ACROLL_TOP:
            return state.set('showScroll', action.show);            
        default:
            return state;    
   }
}
   