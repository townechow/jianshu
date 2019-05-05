import  {fromJS} from  'immutable';


const defaultState = fromJS({
    topicList: [ ],
    articleList: [ ],
    recommendList: [ ],
    WriterList: [ ]   

});

export default (state = defaultState, action) => {
   switch(action.type) {
        case 'change_home_data':
        console.log('reducer:',action)
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList:fromJS(action.recommendList),
                WriterList: fromJS(action.WriterList)
            })
        default:
            return state;    
   }
}
   