import React from 'react'
import { useSelector } from 'react-redux'
import './Header.css'
import { Search, Home, Flag, Subscriptions, StorefrontOutlined, SupervisedUserCircle, Add, Forum, NotificationsActive, ExpandMore } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';

const Header = () => {
    const { userInfo } = useSelector(state => state.user)
    return (
        <div className="header">
            <div className="header_left">
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png' alt='' />
                <div className="header_input">
                    <Search />
                    <input type='text' />
                </div>
            </div>
            <div className="header_middle">
                <div className="header_option header_option_active">
                    <Home fontSize='large' />
                </div>
                <div className="header_option">
                    <Flag fontSize='large' />
                </div>
                <div className="header_option">
                    <Subscriptions fontSize='large' />
                </div>
                <div className="header_option">
                    <StorefrontOutlined fontSize='large' />
                </div>
                <div className="header_option">
                    <SupervisedUserCircle fontSize='large' />
                </div>
            </div>
            <div className="header_right">
                <div className="header_info">
                    <Avatar src={userInfo && userInfo.photoURL} />
                    <h4>{userInfo && userInfo.displayName}</h4>
                </div>
                <IconButton>
                    <Add />
                </IconButton>
                <IconButton>
                    <Forum />
                </IconButton>
                <IconButton>
                    <NotificationsActive />
                </IconButton>
                <IconButton>
                    <ExpandMore />
                </IconButton>
            </div>
        </div>
    )
}

export default Header