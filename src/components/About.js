import React from 'react'

function About() {
  return (
    <div style={{
      alignItems:'center',
      textAlign:'center',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignContent:'center'
    }}>
    <h1 style={{marginTop:"50px"}}> What We Do</h1>
   
    <div style={{margin:"25px 100px"}}>
    <p>EQUIP9 TM   delivers more to heavy equipment business so that customers just don't do business, they do optimized and futuristic business.</p></div>

    <div style={{width:"60%"}}>
      <iframe width='800px' height='500px' src="https://www.youtube.com/embed/g37zmCLtPzo?si=yQrGpS92a8KkPOBS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      
      <div style={{margin:"50px 100px"}}>
        <p>Our mission is to provide a 360-degree connection for all participants in the heavy equipment industry. We envision being a one-stop shop for everything related to heavy equipment, from buying and selling to renting and financing. By bringing the industry together on one platform, we aim to reduce the barriers to entry, increase efficiency, and facilitate growth for all stakeholders</p>
        </div>
    </div>
    
  )
}

export default About