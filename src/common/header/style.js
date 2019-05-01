import styled from 'styled-components';
import logoPic from '../../statics/nav-logo.png' //logo图的引入方式

export const HeaderWrapper = styled.div `
    position:relative;
    height:58px;
    border-bottom:1px solid #f0f0f0;
    `//创建了应该带样式的div标签组件

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
    `//创建了应该带样式的a标签组件,带href属性。

export const Nav = styled.div `
    width: 945px;
    height: 100%;
    padding-right: 70px;
    box-sizing: border-box;
    margin: 0 auto;
   
    `
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
`
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
}) `
    width: 160px;
    height: 38px;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 20px;
    box-sizing:border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    &::paceholder {
        color: #999;
    }
`
export const Addition = styled.div `
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;

`
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
`