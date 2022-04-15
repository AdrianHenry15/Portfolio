import React from 'react'
import Resume from '../../assets/Images/Resume 4.15.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={Resume} download>Resume</a>
    </div>
  )
}

export default CTA
