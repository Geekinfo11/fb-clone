import React, { useState, useEffect } from 'react'
import './Feed.css'
import StoryWrap from './StoryWrap'
import MessageSender from './MessageSender'
import Post from './Post'
import db from '../firebase'

const Feed = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    })
    return (
        <div className='feed'>
            <StoryWrap />
            <MessageSender />
            {posts && posts.map(post => (
                <Post key={post.id} profilePic={post.data.profilePic}
                    image={post.data.image}
                    username={post.data.userName}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                />
            ))}


        </div>
    )
}

export default Feed
