import { Button } from '@material-ui/core'
import React, { useEffect } from 'react'
import './Widgets.css'


const Widgets = () => {
    return (
        <div className='widgets'>
            <div className="widget">
                <img src='/images/linkedin-profile.png' />
                <div className="overlay"></div>

                <Button onClick={() => window.open('https://www.linkedin.com/in/hassan-am-bb1773205/', '_blank')}>LinkedIn Profile</Button>
            </div>
        </div>
    )
}

export default Widgets
