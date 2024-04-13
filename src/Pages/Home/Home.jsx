import React from 'react'
import Style from './Home.module.css'
import NavBar from '../../components/NavBar/NavBar'
import RecentMessage from '../../components/RecentMessage/RecentMessage'

export default function Home() {
    return (
        <div className={Style.main}>
            <div className='p-10'>
                <NavBar />
            </div>
            <div >
                <h4 className='text-center text-3xl font-semibold text-slate-700'>Hello there.</h4>
                <h4 className='text-center text-3xl font-semibold text-white'>How can we help?</h4>
            </div>
            <div>
                <RecentMessage />
            </div>
        </div>
    )
}
