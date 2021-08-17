import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Avatar } from '@material-ui/core'
import './MessageSender.css'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons'
import db from '../firebase'
import firebase from 'firebase'

const MessageSender = () => {
    const [message, setMessage] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const { userInfo } = useSelector(state => state.user)

    const handleSubmit = (e) => {
        e.preventDefault()

        db.collection('posts').add({
            profilePic: userInfo.photoURL,
            userName: userInfo.displayName,
            message: message,
            image: imageUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setMessage('')
        setImageUrl('')
    }
    return (
        <div className='messagesender'>
            <div className="messagesender_top">
                <Avatar src={userInfo && userInfo.photoURL} />
                <form onSubmit={handleSubmit}>
                    <input className='messagesender_input' type='text' value={message} placeholder={`Whats on your mind, ${userInfo.displayName}`} onChange={e => setMessage(e.target.value)} />
                    <input type='text' value={imageUrl} placeholder='Image URL (OPTIONAL)' onChange={e => setImageUrl(e.target.value)} />
                    <input hidden type='submit' value='submit' />
                </form>
            </div>
            <div className="messagesender_bottom">
                <div className="messagesender_option">
                    <Videocam style={{ color: 'red' }} />
                    <h4>Live Video</h4>
                </div>
                <div className="messagesender_option">
                    <PhotoLibrary style={{ color: 'green' }} />
                    <h4>Photo/Video</h4>
                </div>
                <div className="messagesender_option">
                    <InsertEmoticon style={{ color: 'orange' }} />
                    <h4>Feeling/Activity</h4>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
