import React, { Component } from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Write from './components/Writer'
import {
    HomeWapper,
    HomeLeft,
    HomeRight,


} from './style.js'


class Home extends Component {
    render() {
        return(
            <HomeWapper>
                <HomeLeft>
                    <img className ='banner-img' src='//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
                    alt=''/>
                    <Topic>              
                    </Topic>
                    <List>                        
                    </List>
                </HomeLeft>
                <HomeRight>
                    <Recommend>Recommend</Recommend>
                    <Write>Write</Write>
                </HomeRight>
            </HomeWapper>
        )
    }
    componentDidMount(){
        axios.get('/api/home.json').then((res)=>{
            const result=res.data.data;
            console.log(result)
            const action = {
                type: 'change_home_data',
                topicList: result.topicList,
                articleList: result.articleList,
                recommendList: result.recommendList,
                WriterList: result.WriterList 
            }
            this.props.changeHomeData(action);
        }).catch(() => {
            console.log('get home data erro');
        })
        
    }
}
const mapDispatchToProps = (dispatch) =>({
    changeHomeData(action) {
        dispatch(action);
        console.log(action)
    }

})
export default connect(null,mapDispatchToProps) (Home);