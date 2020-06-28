import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import * as actionCreators from '../store/actionCreators'

import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style';

class List extends PureComponent {
    render() {
        const { list,getMore,page } = this.props
        return(
            <Fragment>
            {
                list.map((item,index) =>{
                    return (
                       <Link key= {index} to={`${window.beforeRoute}/detail/` + item.get('id')}>
                           <ListItem > {/*key 要改为item.get('id')*/}
                            <img
                                className='list-pic'
                                src={item.get('imgUrl')}
                                alt=''
                            />
                            <ListInfo>
                                <h3 className='title' >{item.get('title')}</h3>
                                <p className='desc'>{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                        </Link> 
                    )
                })
            }
            <LoadMore onClick={()=>getMore(page)}>更多内容</LoadMore>
            </Fragment>
        )
    }
}

const mapSateToProps = (state) => ({
    list: state.get('home').get('articleList'),
    page: state.getIn(['home','aticelPage'])
});
const mapDispatchToProps = (dispatch) => ({
    getMore(page){
        const action = actionCreators.getMoreList(page)
        dispatch(action)
    }
})


export default connect(mapSateToProps, mapDispatchToProps) (List);