import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux';
import { WriterWrapper,
    WriterTitle,
    WriterList,
    WriterItem,
    AppDownload
 } from '../style';


class Writer extends Component {
    render() {
        return(
            <Fragment>
                <AppDownload>
                    <img className='qrcode' src='http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png' 
                    alt=''/>
                    <div className='info'>
                    <div className='title'>下载手机App ></div>
                    <div className='desc'>随时随地发现和创作内容</div>
                    </div>
                </AppDownload>
                <WriterWrapper>
                    <WriterTitle>
                    <span className='recommend'>推荐作者</span>
                    <span className='change'>换一批</span>
                    </WriterTitle>
                    <WriterList>                   
                        {
                        this.props.list.map((item) => (
                            
                            <WriterItem key ={item.get('id')}>
                                <a className='avatar' href='/'>
                                    <img src={item.get('imgUrl')}
                                    alt=''/>
                                </a>
                                <a className='follow' href='/'>+关注</a>  
                                <a className='name' href='/'>{item.get('name')}</a>  
                                <p>写了623.4k字 · 12.1k喜欢</p>                    
                            </WriterItem>
                        )   
                        )
                        }                        
                    </WriterList>
                </WriterWrapper>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.getIn(['home','WriterList'])
})

export default connect(mapStateToProps,null) (Writer);