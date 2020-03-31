import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    ListItem, ListInfo
} from '../style';
import { connect } from 'react-redux';
class List extends Component {

    render() {
        return (
            <div>
                {
                    this.props.articleList.map((item) => (
                        <Link key={item.get('id')} to='/detail'>
                            <ListItem>
                                <img
                                    alt=''
                                    src={item.get('imgUrl')}
                                    className='pic'
                                />
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>
                                        {item.get('desc')}
                                    </p>
                                </ListInfo>
                            </ListItem>
                        </Link>)
                    )
                }
            </div>
        )
    }
}
const mapState = (state) => ({
    articleList: state.getIn(['home', 'articleList'])
})

export default connect(mapState, null)(List);