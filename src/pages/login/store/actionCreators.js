import axios from 'axios';
import * as constants from './constants';

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
})
export const logout = () => ({
    type: constants.LOGOUT,
    value: false
})
export const loginData = (account, password) =>{
    return (dispatch) => {
        axios.get(`${window.beforeRoute}/api/login.json?accout=` + account + '&password=' + password).then((res)=>{
            const result = res.data.data;
            if (result) {
                dispatch(changeLogin())
            }else{
                alert('登录失败')
            }
        })
    }
}