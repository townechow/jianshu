import React, { Component } from 'react';

import {connect} from 'react-redux'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Write from './components/Writer'
import {
    HomeWapper,
    HomeLeft,
    HomeRight,
    BackTop

} from './style.js'
import {actionCreators} from './store/index';



class Home extends Component {
    handleScrollTop() {
        window.scrollTo(0, 0);
    }
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
                { this.props.showScroll ?  <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
               
            </HomeWapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents(); // 挂载完成后绑定事件      
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopshow);
    } //当组件移除的时候也一定要把绑定的事件移除  

    bindEvents () { //往window上绑定scroll事件监听
        window.addEventListener('scroll',this.props.changeScrollTopshow);
    }
}
 

const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) =>({
    changeHomeData() {
            const action = actionCreators.getHomeInfo();
            dispatch(action);
    },
    changeScrollTopshow () {
        if (document.documentElement.scrollTop > 500) {
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
        console.log(document.documentElement.scrollTop)
    }
    

})
export default connect(mapStateToProps, mapDispatchToProps) (Home);