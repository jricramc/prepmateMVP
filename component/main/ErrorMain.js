import Link from 'next/link'
import React from 'react'
const ErrorMain = () => {
  return (
    <div className='error-container'>
        <div className='error-content'>
            <img src='images/404-image.png' alt='error-img' width={600} height={400}/>
            <h2 className='error-text'>No Page Found!</h2>
            <Link href='/' className='fz-1-banner-btn update-cart-btn'>Go Back to Home</Link>
        </div>
    </div>
  )
}

export default ErrorMain