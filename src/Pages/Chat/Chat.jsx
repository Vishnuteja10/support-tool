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
                <div>
                    <h3 className='text-center text-3xl font-semibold text-slate-700'>Hello there!</h3>
                    <h3 className='text-center text-3xl font-semibold text-sky-600'>How can we help you today?</h3>
                </div>
                <div className='mt-5 flex justify-start'>
                    <div className=' ms-2 sm:ms-10 rounded ps-2 pe-2 text-cyan-400 border border-cyan-400 max-w-52'>Study Requirement</div>
                </div>
                <div className='mt-2 flex me-3 justify-end'>
                    <div className=' ms-2 sm:ms-10 rounded ps-2 pe-2 text-white border bg-slate-500 max-w-52'>Nothing</div>
                </div>
            </div>
            <div className='flex align-middle justify-center'>
                <span className='font-semibold mb-2'>Please enter your concern queries.Our team will definitely try to help you out </span>
            </div>
            <div className='flex align-middle justify-center mb-2'>
                <SendUsMessage />
            </div>
            <div className={Style.footerContainer}>
                <Footer />
            </div>
        </div>
    )
}
