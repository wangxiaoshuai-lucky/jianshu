import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import {
    HeadWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchTitle,
    SearchSwitch,
    SearchInfoItem
} from './style'
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Header extends Component {

    getSearchItem() {
        const { focused, mouseIn, list, page, totalPage, handleMouseIn, handleMouseLeave, handleSwitch } = this.props;
        const newList = list.toJS();
        const pageList = []
        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                if (i === newList.length) {
                    break;
                }
                pageList.push(
                    <SearchInfoItem
                        key={newList[i]}
                    >{newList[i]}</SearchInfoItem>
                )
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseIn}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchTitle>
                        热门搜索
                        <SearchSwitch
                            onClick={() => handleSwitch(page, totalPage, this.spin)}
                        >
                            <span
                                ref={(ref) => { this.spin = ref }}
                                className="iconfont spin">&#xe851;</span>换一批</SearchSwitch>
                    </SearchTitle>
                    <div>
                        {
                            pageList
                        }
                    </div>
                </SearchInfo>
            )
        }
        return null;
    }


    render() {
        return (
            <HeadWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left' >下载</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'><span className="iconfont">&#xe636;</span></NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            timeout={400}
                            in={this.props.focused}
                            classNames='slide'
                        >
                            <NavSearch
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={() => this.props.handleOnFocus(this.props.list)}
                                onBlur={this.props.handleOnBlur}
                            />
                        </CSSTransition>
                        <span className={this.props.focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe6cf;</span>
                        {this.getSearchItem()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'><span className="iconfont">&#xe637;</span>写文章</Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeadWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mouseIn: state.getIn(['header', 'mouseIn']),
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleOnFocus(list) {
            list.size === 0 && dispatch(actionCreators.getHeaderList())
            dispatch(actionCreators.createFocusAction())
        },

        handleOnBlur() {
            dispatch(actionCreators.createBlurAction())
        },
        handleMouseIn() {
            dispatch(actionCreators.createMouseChangeAction(true))
        },
        handleMouseLeave() {
            dispatch(actionCreators.createMouseChangeAction(false))
        },
        handleSwitch(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            if (page !== totalPage) {
                dispatch(actionCreators.createChangePageAction(page + 1))
            } else {
                dispatch(actionCreators.createChangePageAction(1))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);