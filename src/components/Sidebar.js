import React from 'react'
import { useSelector } from 'react-redux'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import { Chat, EmojiFlags, ExpandMore, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons/'

const Sidebar = () => {
    const { userInfo } = useSelector(state => state.user)
    return (
        <div className='sidebar'>
            <SidebarRow src={userInfo && userInfo.photoURL} title={userInfo && userInfo.displayName} />
            <SidebarRow Icon={LocalHospital} title='COVID-19 Information Center' />
            <SidebarRow Icon={EmojiFlags} title='Pages' />
            <SidebarRow Icon={People} title='Friends' />
            <SidebarRow Icon={EmojiFlags} title='Pages' />
            <SidebarRow Icon={Chat} title='Messenger' />
            <SidebarRow Icon={Storefront} title='MarketPlace' />
            <SidebarRow Icon={VideoLibrary} title='Videos' />
            <SidebarRow Icon={ExpandMore} />
        </div>
    )
}

export default Sidebar