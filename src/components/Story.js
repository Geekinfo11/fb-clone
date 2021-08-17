import React from 'react'
import './Story.css'
import { Avatar } from '@material-ui/core'

const Story = ({ bgImage, profilePic, title }) => {
    return (
        <div style={{ backgroundImage: `url(${bgImage})` }} className='story'>
            <Avatar src={profilePic} />
            <h4>{title}</h4>
        </div>
    )
}

export default Story
