import React, { useState } from 'react'
import home from '../../assets/images/home.png'
import chat from '../../assets/images/chat.png'
import help from '../../assets/images/help.png'
import newsIcon from '../../assets/images/news.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faQuestionCircle, } from '@fortawesome/free-regular-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import Style from './Footer.module.css'
import { useNavigate } from 'react-router-dom'


export default function Footer() {
    const [home, setHome] = useState(true)
    const [chat, setChat] = useState(false)
    const [help, setHelp] = useState(false)
    const [news, setNews] = useState(false)

    const navigate = useNavigate();


    return (

        <div className='ms-4 me-4 flex align-middle justify-between'>
            <div className={home ? Style.selected : Style.unselect} onClick={() => { setHome(true); setChat(false); setHelp(false); setNews(false); navigate('/') }}> <FontAwesomeIcon icon={faHouse} className='text-xl' /> <br></br> <span >home<FontAwesomeIcon icon="fa-solid fa-house" /></span></div>
            <div className={chat ? Style.selected : Style.unselect} onClick={() => { setChat(true); setHome(false); setHelp(false); setNews(false); navigate('/chats') }}> <FontAwesomeIcon icon={faMessage} className='text-xl' /><br></br> <span>chat</span></div>
            <div className={help ? Style.selected : Style.unselect} onClick={() => { setHelp(true); setChat(false); setHome(false); setNews(false) }}><FontAwesomeIcon icon={faQuestionCircle} className='text-xl' /> <br></br><span>help</span></div>
            <div className={news ? Style.selected : Style.unselect} onClick={() => { setNews(true); setHome(false); setChat(false); setHelp(false) }}> <img src={newsIcon} alt='news image'></img> <span>news</span></div>
        </div >

    )
}
