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

export default (state = defaultState, action) => {
   switch(action.type) {
        case constants.CHANGE_HOME_DATA:
        console.log('reducer:',action)
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList:fromJS(action.recommendList),
                WriterList: fromJS(action.WriterList)
            });
        case constants.ADD_ARTICLE_LIST:
            // return state.set('articleList',state.get('articleList').concat(action.list));
            return state.merge({
                'articleList':state.get('articleList').concat(action.list),
                'aticelPage': action.nextPage
            });
        case constants.TOGGLE_ACROLL_TOP:
            return state.set('showScroll', action.show);            
        default:
            return state;    
   }
}
   