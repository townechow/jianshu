import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
    TopicWrapper,
    TopicItem,
} from '../style';

class Topic extends Component {
    render() {
        return(
            <TopicWrapper>               
                {
                this.props.list.map((item) => {
                    return ( 
                    <TopicItem key={item.get('id')}>
                        <img 
                            className = 'topic-pic'
                            src={item.get("imgUrl")}
                        alt=''/>
                        {item.get('title')}
                    </TopicItem>  
                    )
                })
                }
                                    
            </TopicWrapper>
        )
    }
}

const mapSateToProps = (state) => ({
    list: state.get('home').get('topicList')
})


export default connect(mapSateToProps,null) (Topic);