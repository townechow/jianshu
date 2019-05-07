import  {fromJS, merge} from  'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    title: '',
    content: ''
  
});


export default (state = defaultState, action) => {
   switch(action.type) {
          case  constants.CHANGE_DETAIL:
          console.log('action:',action.title,action.content);
          return merge({
              title: action.title,
              content: action.content
          })       
        default:
            return state;    
   }
}
   