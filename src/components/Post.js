import { Avatar } from '@material-ui/core'
import { AccountCircle, ChatBubbleOutline, ExpandMoreOutlined, NearMe, ThumbUp } from '@material-ui/icons'
import React from 'react'
import './Post.css'

const Post = ({ profilePic, image, username, message, timestamp }) => {
    return (
        <div className='post'>
            <div className="post_top">
                <Avatar className='post_avatar' src={profilePic} />
                <div className="post_top_info">
                    <h3>{username}</h3>
                    {/* {timestamp != null &&
                        <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                    } */}
                    <p>Thu, 24 Jun 2021 10:15:32 GMT</p>
                </div>
            </div>
            <div className="post_bottom">
                <p>{message}</p>
            </div>
            <div className="post_image">
                <img src={image} alt='' />
            </div>
            <div className="post_options">
                <div className="post_option">
                    <ThumbUp />
                    <p>Like</p>
                </div>
                <div className="post_option">
                    <ChatBubbleOutline />
                    <p>Comment</p>
                </div>
                <div className="post_option">
                    <NearMe />
                    <p>Share</p>
                </div>
                <div className="post_option">
                    <AccountCircle />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    )
}

export default Post
