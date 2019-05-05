import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import {
    ListItem,
    ListInfo,
} from '../style';

class List extends Component {
    render() {
        return(
            <Fragment>
            {
                this.props.list.map((item) =>{
                    return (
                        <ListItem key={item.get('id')}>
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
                    )
                })
            }
            </Fragment>
        )
    }
}

const mapSateToProps = (state) => ({
    list: state.get('home').get('articleList')
})


export default connect(mapSateToProps,null) (List);