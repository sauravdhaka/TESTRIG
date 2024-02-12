import React from 'react'

function Header() {
  return (
    <div className='gradient-background'>
        <div className='my-2'>Testrig logo</div>
        <div className='flex my-2'>
           <ul className='header-list flex'>
            <li className='mx-2'>Services</li>
            <li className='mx-2'>Tools</li>
            <li className='mx-2'>Domains</li>
            <li className='mx-2'>Hire QA Tester</li>
            <li className='mx-2'>Company</li>
            <li className='mx-2'>Resources</li>
            <li className='mx-2'>CONTACT US</li>
           </ul>
        </div>
    </div>
  )
}

export default Header