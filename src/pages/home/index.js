import React, { Component } from 'react';
import {
    HomeWrapper, HomeLeft, HomeRight
} from './style';
import Topic from './components/Topic';
import List from './components/List';
class Home extends Component {

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img
                        className='banner-img'
                        alt='pic'
                        src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585648621942&di=5b29b03df67b935a1e603f42657eb588&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2Fd%2Ffb%2Fa673792985.jpg'
                    />
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;