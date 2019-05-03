import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import  {actionCreators} from './store'
import { 
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
    Addition,
    Button,
 } from './style.js';

 class Header extends Component {
    getListArea () {
        const { focused, list } = this.props;
        if (focused) {
            return (
            <SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                <SearchInfoSwitch>
                    换一批
                </SearchInfoSwitch>
                </SearchInfoTitle>            
                <SearchInfoList>
                    {
                    list.map((item) => {
                        return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                    })
                    }
                </SearchInfoList>
            </SearchInfo>
        )
        }else {
            return null;
        }
    }
    
    render (){
        const { focused, handleInputFocus,handleInputBlur}=this.props;
        return(
            <HeaderWrapper>
           <Logo/>
           <Nav>
               <NavItem className='left active'>首页</NavItem>
               <NavItem className='left'>下载App</NavItem>
               <NavItem className='right'>登录</NavItem>
               <NavItem className='right'>
               <span className="iconfont">&#xe636;</span>
               </NavItem>
               <SearchWrapper>
               <CSSTransition
                    in={focused}
                    timeout={400}
                    classNames="slide"
                >
                    <NavSearch
                        className={focused ? 'focused':''}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    >
                    </NavSearch>
                </CSSTransition>
                <span  className={focused ? 'focused iconfont':'iconfont'}>&#xe6a8;</span>
                 {this.getListArea()}
               </SearchWrapper>
           </Nav>
           <Addition>
               <Button className='writting'>
               <span className="iconfont">&#xe602;</span>
               写文章
               </Button>
               <Button className='reg'>注册</Button>
           </Addition>
        </HeaderWrapper>
        )
    }
 }
 //接收一个参数，参数为真则反回代码

//  const Header = (props) =>{
//     return (
        
//      ) 

//  }


const mapStateToProps = (state) => {
    return {
        // focused: state.header.focused
        // focused: state.header.get('focused')
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list'])
        

    }
}

const mapDispathToProps =(dispatch) => {
    return{
        handleInputFocus() {
            // const action = {
            //     type:'search_focus'
            // };
            dispatch(actionCreators.searchFocus());
            dispatch(actionCreators.getList())
        },
        handleInputBlur() {
            
            dispatch(actionCreators.searchBlur());
        }

    }
}


export default connect(mapStateToProps, mapDispathToProps)(Header);