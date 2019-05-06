import styled from 'styled-components'


export const HomeWapper = styled.div `
    overflow: hidden;
    width: 960px;
    margin: 0 auto;

`;

export const HomeLeft = styled.div `
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner-img {
        width: 625px;
        height:270px;
        border-radius: 6px;
        
    }
    
`;
export const HomeRight = styled.div `
    float: right;
    width: 280px;
`;

//Topic start
export const TopicWrapper = styled.div `
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div `
    float:left;
    height: 32px;
    margin-left: 18px;
    margin-bottom: 18px;
    padding-right:10px;
    line-height: 32px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right:10px;
    }
`;
//Topic end

//List start
export const ListItem = styled.div `
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;

    .list-pic {
        display: block;
        width 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
        // border: 1px solid #f0f0f0;
    }
`;
export const ListInfo = styled.div `
    width: 500px;
    float:left;

    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color:#333
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;
//List end

// LoadMore start
export const LoadMore = styled.div `
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    text-align: center;
    background: #a5a5a5;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`;

// LoadMore end 

//Recommend start
export const RecommendWrapper = styled.div `
    margin: 30px 0;
    width: 280px;
    
`;
export const RecommendItem = styled.div `
    margin-bottom: 6px;
    width: 100%;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
    border-radius: 4px;
    
`;
//Recommend end

// AppDownload start
export const AppDownload =styled.div `
    float: left;    
    margin-bottom: 30px;
    margin-top: -20px;
    padding: 10px 22px;
    width: auto;
    height: auto;
    border: 1px solid #f0f0f0;
    border-radius: 20px;
    background-color: #fff;
    cursor: pointer;

    .qrcode {
        float:left;
        width: 60px;
        height: 60px;
        opacity: .85;
        border: 0
        vertical-align: middle;
    }
    .info {
        float: left;
        margin: 14px 15px;
        .title {
            font-size: 15px;
            color: #333;
            line-height: 1.42857;
        }
        .desc {
            margin-top: 4px;
            font-size: 13px;
            color: #999;
        }
    }

`;
//AppDownload end

//Writer start
export const WriterWrapper = styled.div `
    box-sizing: border-box;
    margin-bottom: 20px;
    padding-top: 0;
    font-size: 13px;
    text-align: center;
    // border: 1px solid #dcdcdc;

`;

export const WriterTitle = styled.div `
    text-align: left;
    
    .recommend {
        font-size: 14px;
        color: #969696;
    }
    .change {
        float: right;
        display: inline-block;
        font-size: 14px;
        color: #969696;
        cursor: pointer;
    }
    
`;
export const WriterList = styled.div `
    margin: 0 0 20px;
    text-align: left;
    // border: 1px solid #dcdcdc;

`;
export const WriterItem = styled.div `
    overflow:hidden;
    margin-top: 15px;
    line-height: 20px;
    .avatar{
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        display: block;
        cursor: pointer;
        text-decoration: none;
        >img {
            width: 100%;
            height: 100%;
            border: 1px solid #ddd;
            border-radius: 50%;
            vertical-align: middle;
           
        }
    }
    .follow {
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
        font-weight: 400;
        line-height: normal;
        cursor: pointer;
        text-decoration: none;
    }
    .name {
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        color: #333;
        display: block;
        text-decoration: none;
    }
    >p {
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }


`;
// Writer end

// BackTop star
export const BackTop = styled.div `
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 14px;
    border: 1px solid #ccc;
    cursor: pointer;

`;
//BackTop end