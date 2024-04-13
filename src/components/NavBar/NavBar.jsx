import React from 'react'
import logo from '../../assets/logos/logo.png'
import user1 from '../../assets/images/user1.png'
import user2 from '../../assets/images/user2.png'
import user3 from '../../assets/images/user3.png'

export default function NavBar() {
    return (
        <div className='flex align-middle justify-between w-1/2'>
            <div>
                <img src={logo}></img>
            </div>
            <div className='flex align-middle'>
                <img src={user1}></img>
                <img src={user2}></img>
                <img src={user3}></img>
            </div>
        </div>
    )
}
