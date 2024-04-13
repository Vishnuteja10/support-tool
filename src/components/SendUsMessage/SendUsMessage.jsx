import React from 'react'
import sendIcon from '../../assets/images/send.png'

export default function SendUsMessage() {
    return (
        <div className='flex align-middle justify-between w-4/5 h-25 p-3 rounded-2xl bg-white border border-slate-300'>
            <div >
                <span className='font-semibold'>Send us a message</span><br></br>
                <span>We typically reply within in a few minutes</span>
            </div>
            <div>
                <img className='mt-3' src={sendIcon}></img>
            </div>
        </div>
    )
}
