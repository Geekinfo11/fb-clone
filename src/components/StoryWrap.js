import React from 'react'
import './StoryWrap.css'
import Story from './Story'

const StoryWrap = () => {
    return (
        <div className='storywrap'>
            <Story bgImage='https://i.pinimg.com/originals/34/95/7c/34957c306a259279cac4daac14f25bc8.gif' profilePic='https://64.media.tumblr.com/ec12640f20c175298947c1f7c26542aa/5f9daf677b59635f-b9/s400x600/f40ce3daf1de5921afabc8e170f479ba3a8c22fb.jpg' title='Uchiha Sasuke' />
            <Story bgImage='https://steamuserimages-a.akamaihd.net/ugc/885385098243051370/0727306D2BBEBE8285E8A8ACC56C618FFBD90810/' profilePic='https://live.staticflickr.com/7331/9404155015_95482cd303_c.jpg' title='Uzumaki Naruto' />
            <Story bgImage='https://media1.tenor.com/images/f6d24beaa7267b43be18344b8e66985f/tenor.gif?itemid=15830432' profilePic='https://i.pinimg.com/originals/b0/b6/d3/b0b6d320e7e5195751ed87a025e9318a.jpg' title='Jiraiya' />
            <Story bgImage='https://media1.tenor.com/images/4e78e74f76618168d9d6226f3f1d2034/tenor.gif?itemid=8025649' profilePic='https://i.ytimg.com/vi/esJOOQG42r0/maxresdefault.jpg' title='Uchiha Madara' />
            <Story bgImage='https://media1.tenor.com/images/26177f0ea5402d7ed1d5ea9ceb30971c/tenor.gif?itemid=8965153' profilePic='https://s4.anilist.co/file/anilistcdn/character/large/b2535-Xq9WKNPJQEt3.png' title='Namikaze Minato' />
        </div>
    )
}

export default StoryWrap
