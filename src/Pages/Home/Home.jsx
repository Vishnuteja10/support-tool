import React from 'react'
import Style from './Home.module.css'
import NavBar from '../../components/NavBar/NavBar'
import RecentMessage from '../../components/RecentMessage/RecentMessage'
import SendUsMessage from '../../components/SendUsMessage/SendUsMessage'
import SearchBox from '../../components/SearchBox/SearchBox'
import Footer from '../../components/Footer/Footer'

export default function Home() {
    return (
        <div className={Style.home}>
            <div className={Style.main}>
                <div className='sm:p-10 ms-1 me-1 mt-2 p-0'>
                    <NavBar />
                </div>
                <div className='mt-14' >
                    <h4 className='text-center text-3xl font-semibold text-slate-700'>Hello there.</h4>
                    <h4 className='text-center text-3xl font-semibold text-white'>How can we help?</h4>
                </div>
                <div className='flex align-middle justify-center'>
                    <RecentMessage />
                </div>
                <div className='flex align-middle justify-center'>
                    <SendUsMessage />
                </div>
                <div className='flex align-middle mt-4 justify-center'>
                    <SearchBox />
                </div>
            </div>
            <div className='relative '>
                <Footer />
            </div>
        </div>
    )
}
