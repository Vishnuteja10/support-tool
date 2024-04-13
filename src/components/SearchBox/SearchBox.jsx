import React from 'react'
import searchIcon from '../../assets/images/searchIcon.png'
import rightArrow from '../../assets/images/rightArrow.png'

export default function SearchBox() {
    return (
        <div className='w-4/5 rounded-2xl border border-slate-300 bg-white'>
            <div className=''>
                <div className='flex ms-5 mt-2 align-middle justify-between p-1 rounded border border-slate-500 bg-slate-400 w-11/12'>
                    <input placeholder='Search For Help' className='placeholder-gray-800 font-semibold w-3/4  bg-slate-400' />
                    <span><img src={searchIcon}></img></span>
                </div>
                <div className='ms-5 mt-3 flex align-middle justify-between w-11/12'>
                    <div>Send customer user attributes to intercom</div>
                    <img className='h-3' src={rightArrow}></img>
                </div>
                <div className='ms-5 mt-3 flex align-middle justify-between w-11/12'>
                    <div>Tickets explained</div>
                    <img className='h-3' src={rightArrow}></img>
                </div>
            </div>
        </div>
    )
}
