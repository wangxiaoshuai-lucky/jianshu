import React from 'react';
import { CSSTransition } from 'react-transition-group';
import {
    HeadWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style'
import { connect } from 'react-redux';
import { actionCreators } from './store';
const Header = (props) => {
    return (
        <HeadWrapper>
            <Logo />
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left' >下载</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'><span className="iconfont">&#xe636;</span></NavItem>
                <SearchWrapper>
                    <CSSTransition
                        timeout={400}
                        in={props.focused}
                        classNames='slide'
                    >
                        <NavSearch
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handleOnFocus}
                            onBlur={props.handleOnBlur}
                        />
                    </CSSTransition>
                    <span className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe6cf;</span>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className='writting'><span className="iconfont">&#xe637;</span>写文章</Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeadWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleOnFocus() {
            dispatch(actionCreators.createFocusAction())
        },

        handleOnBlur() {
            dispatch(actionCreators.createBlurAction())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);