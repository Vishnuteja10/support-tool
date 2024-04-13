import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import Style from './Chat.module.css'
import SendUsMessage from '../../components/SendUsMessage/SendUsMessage'

export default function Chat() {
    return (
        <div className={Style.chat}>
            <div className={Style.main}>
                <div className={Style.navbarContainer}>
                    <NavBar />
                </div>
                <div></div>
            </div>
            <div>
                <SendUsMessage />
            </div>
            <div className={Style.footerContainer}>
                <Footer />
            </div>
        </div>
    )
}
