import React from 'react'
import './NetflixAss.css'

const NetflixAss = () => {
  return (
   <div className='page'>
       <div className='left'>
       <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
       <div className='inter'>
           <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" className='stangering' />
           <h5 className='text1'>Stranger Things</h5>
           <h6 className='text2'>Downloading...</h6>
           <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt=""  className='gif'/>
       </div>
       </div>


       <div className='right'>
           <h2>Download your shows to watch offline.</h2>
           <h5>Save your favorites easily and always have something to watch.</h5>
       </div>
       </div>
  )
}

export default NetflixAss