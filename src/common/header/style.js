import styled from 'styled-components';
import logoPic from '../../statics/nav-logo.png' //logo图的引入方式

//header
export const HeaderWrapper = styled.div `
    position:relative;
    height:58px;
    border-bottom:1px solid #f0f0f0;
`;//创建了应该带样式的div标签组件

//logo start
export const Logo = styled.a.attrs({
    href:'/'
}) `
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background: url(${logoPic});
    background-size: contain;
`;//创建了应该带样式的a标签组件,带href属性。
//logo end

export const Nav = styled.div `
    width: 945px;
    height: 100%;
    padding-right: 70px;
    box-sizing: border-box;
    margin: 0 auto;
   
`;
export const NavItem = styled.div `
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696
    }
    &.active {
        color: #ea6f5a;
    }
`;

//搜素框 
export const SearchWrapper = styled.div `
    position: relative;
    float: left;
    
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused {
            background: #777;
            color: #fff;
        } 
    }
`;// div >> .iconfont >> .focused 


export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
}) `
    width: 160px;
    height: 38px;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 30px 0 20px;
    box-sizing:border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666
    &::paceholder {
        color: #999;
    }
    &.focused {
        width:240px
    }
    
    &.slide-enter {
        transition: all .4s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .4s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }

`;

export const SearchInfo = styled.div `
    position: absolute;
    lefe: 0;
    top: 56px;
    width: 240px;
    padding: 0 24px;
    
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);

`;
export const SearchInfoTitle = styled.div `
    
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.span` 
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin {
        dislplay: block;
        float:left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .5s ease-in;  //过渡效果
        //transform: rotate(90deg);  //旋转
        transform-origin: center center; // 旋转中心

    }

`;

export const SearchInfoItem = styled.a `
    display: inline-block;
    float: left;
    line-height: 20px;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 10px
    font-size: 13px;
    border: 1.5px solid #ddd;
    color: #787878;
    border-radius: 2px;
`;
export const SearchInfoList = styled.div `

`;

//注册、写文章 start
export const Addition = styled.div `
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;

`;
export const Button = styled.div `
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background: #ec6149;
    }
`;
//注册、写文章 end