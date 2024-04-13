import React from 'react'
import user1 from '../../assets/images/user1.png'
import user2 from '../../assets/images/user2.png'
import user3 from '../../assets/images/user3.png'


export default function RecentMessage() {
    return (
        <div className='w-4/5 m-5 rounded-2xl bg-white'>
            <div className='ms-3 font-semibold'>
                Recent Message
            </div>
            <div className='flex p-2'>
                <div className='w-15 ms-3'>
                    <div><img className='text-center ms-2 w-6' src={user1}></img></div>
                    <div className='flex'>
                        <img className='w-6' src={user2}></img>
                        <img className='w-6' src={user3}></img>
                    </div>
                </div>
                <div className='ms-3'>
                    <span className='text-black'>No problem just chat in...</span><br></br>
                    <span className='text-slate-600'>Intercom</span> <span className='text-slate-600 ms-2'> 1hr ago</span>
                </div>
            </div>
        </div>
    )
}
