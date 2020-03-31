import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    text-overflow: ellipsis;
    overflow: hidden;
`

export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    float: left;
    .banner-img{
        width: 625px;
        height: 270px;
    }
`

export const HomeRight = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width: 240px;
    float: right;
`

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
    height: 32px;
    float: left;
    line-height: 32px;
    padding-right: 10px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    margin-left: 18px;
    margin-bottom: 18px;
    .topic-img {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    height: 126px;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        margin-top: 18px;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 5px;
    }
`

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        height: 27px;
        overflow: hidden;
        text-overflow: ellipsis;
        // 当超过1行用....来省略
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        line-height: 27px;
        font-size: 18px;
        font-weight: blod;
        color: #333;
    }
    .desc {
        height: 72px;
        overflow: hidden;
        text-overflow: ellipsis;
        // 当超过3行用....来省略
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`