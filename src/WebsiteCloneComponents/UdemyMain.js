import React from 'react'
import './UdemyMain.css'
const UdemyMain = () => {
  return (
    <div className='mainNav'>
        {/* Udemy Logo */}
        <div className='logo-block'>
            <img src="https://www.udemy.com//staticx/udemy/images/v7/logo-udemy.svg" className='logo'/>
        </div>
        <div className='categories-block'>
            <h3>Categories</h3>
        </div>
        <div className='searchBar'>
            <img className='searchBar-icon' src='https://cdn-icons.flaticon.com/png/128/2989/premium/2989907.png?token=exp=1647934271~hmac=309ea1ac4b53feba05ddb4e5e452acaa'/>
            <input type="text" /*className='searchBar'*/ placeholder='Search for anything' /*onChange={}*//>
        </div>
    </div>
  )
}

export default UdemyMain