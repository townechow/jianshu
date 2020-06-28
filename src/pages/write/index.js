import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';



class Write extends PureComponent {
    render() {  
        const {loginStatus} = this.props; 
        if (loginStatus){   //数据为真则：
            return(
                     <div>写文章</div>  
            )
        }else{ // 否则：
            return <Redirect to={`${window.beforeRoute}/login`}/>;
        }
    }
   
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login','login'])
})


export default connect(mapState, null)(Write);