import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import {LoginWrapper,  LoginBox, Input, Buttom,} from './style';
import {actionCreators} from './store/index';



class login extends PureComponent {
    render() {  
        const {loginStatus} = this.props; 
        if (!loginStatus){   //数据不为真：
            return(
                <LoginWrapper>
                    <LoginBox> 
                        <Input placeholder='账号' ref={(input)=>{this.account=input}}/> {/*获取本标签真实DOM赋值到this.account，下同 */}
                        <Input placeholder='密码' type = 'password' ref={(input)=>{this.password=input}}/>
                        <Buttom onClick={() => this.props.login(this.account,this.password)}>登录</Buttom>
                    </LoginBox>
                </LoginWrapper>                
            )
        }else{ // 数否则则：
            return <Redirect to='/'/>;
        }
    }
   
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login','login'])
})
const mapDispatch = (dispatch) => ({
   login (account,assword) {
       dispatch(actionCreators.loginData(account.value,assword.value))
    console.log(account.value,assword.value);

   }
})

export default connect(mapState, mapDispatch)(login);