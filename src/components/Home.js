import React from 'react'
import cristmas from '../assets/cristmas.jpeg'

function Home() {
  return (
    
    <div style={{textAlign:'center',margin:'50px'}}>
            <h1>Welcome to Equip9</h1>
            <h2>Revolutionizing the Heavy Equipment Industry</h2>
            <p>ONE INDUSTRY | ONE APP</p>
           <img src={cristmas} alt="cristmas celebration" />
            <div class="download-buttons">
                <a href="#" class="ios-download-link">Download on the App Store</a>
                <a href="#" class="android-download-link">Get it on Google Play</a>
            </div>
    </div>
  )
}

export default Home