import React, { useState } from 'react'
import sendIcon from '../../assets/images/send.png'

export default function SendUsMessage({ systemQuestions, setSystemQuestions }) {
    const [messageItem, setMessageItem] = useState(false)

    const [text, setText] = useState({})
    return (
        <div className='flex cursor-pointer align-middle justify-between w-4/5 h-20 p-3 rounded-2xl bg-white border border-slate-300'>
            <div className='w-11/12' >
                {messageItem ?
                    <input placeholder='Send us a message' className='h-8 w-4/5 outline-none' onChange={(e) => setText({ "user": e.target.value })} /> :
                    <div onClick={() => setMessageItem(true)}>
                        <span className='font-semibold'>Send us a message</span><br></br>
                        <span>We typically reply within in a few minutes</span>
                    </div>}
            </div>
            <div>
                <img className='mt-3' src={sendIcon} onClick={() => { setMessageItem(false); setSystemQuestions((prev) => [...prev, text]); console.log("sys", systemQuestions) }}></img>
            </div>
        </div>
    )
}
