import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import { Link }  from 'react-router-dom';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators} from '../../pages/login/store/';
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

 class Header extends PureComponent {
    getListArea () {
        const { focused, list, page,mouseIn, handelMouseEnter, handelMouseLeave, totalPage,handleChangePage} = this.props;
        const newList = list.toJS(); //把不可变list转换为可变
        const pageList =[];

        if(newList.length) {
            for (let i= (page-1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo 
                onMouseEnter ={handelMouseEnter}
                onMouseLeave ={handelMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick= { () => {handleChangePage(page,totalPage,this.spinIcon)}}>
                        <span ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe851;</span>
                        {/*ref 'd 获取组件渲染出来的真实DOM节点*/}
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>            
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null;
        }
       
    }
    
    render (){
        const { focused, handleInputFocus,handleInputBlur,list,  login, handelLogout}=this.props;
        return(
            <HeaderWrapper>
                <Link to= {`${window.beforeRoute}/index`}>
                    <Logo/>
                </Link>
                <Nav>                   
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>

                    { login ? <NavItem onClick={handelLogout} className='right'>退出</NavItem> : 
                   <Link to={`${window.beforeRoute}/login`}><NavItem className='right'>登录</NavItem></Link> }
                   
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
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <span  className={focused ? 'focused iconfont zoom':'iconfont zoom'}>&#xe6a8;</span>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to={`${window.beforeRoute}/write`}>
                        <Button className='writting'>
                        <span className="iconfont">&#xe602;</span>
                        写文章
                        </Button>
                    </Link>
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
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header', 'totalPage']),
        login: state.getIn(['login','login'])

    }
}

const mapDispathToProps =(dispatch) => {
    return{
        handleInputFocus(list) {
            // const action = {
            //     type:'search_focus'
            // };
            dispatch(actionCreators.searchFocus());
            // if (list.size===0){
            // dispatch(actionCreators.getList());}
            (list.size===0)&&dispatch(actionCreators.getList());
            
        },

        handleInputBlur() {            
            dispatch(actionCreators.searchBlur());
        },

        handelMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handelMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },

        handleChangePage(page,totalPage,spin ) {
            let originAgle = spin.style.transform.replace(/[^0-9]/ig, ''); // 将非0-9数字替换成空，获取原始transform角度值,结果为字符串!!
            if (originAgle) {
                originAgle = parseInt(originAgle,10); // 如果originAgle存在则将其转化为整数（第一次不存在）
            }else {
                originAgle = 0; // 不存在则直接赋予0.
            }
            spin.style.transform = 'rotate('+ (originAgle+360) +'deg)'; //将旋转角度设为可变且每次加360.
            console.log(originAgle)

            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1))
            }else {
                dispatch(actionCreators.changePage(1))
            }
        },
        handelLogout() {
            dispatch(loginActionCreators.logout());
        }
    }
}


export default connect(mapStateToProps, mapDispathToProps)(Header);