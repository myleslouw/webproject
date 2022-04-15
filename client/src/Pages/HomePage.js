import React from 'react'
import LanguageItem from '../Components/LanguageItem'
import Logo from '../Components/Logo.svg'
import JSLogo from '../Components/JSLogo.png'
import CSSLogo from '../Components/CSSLogo.png'
import '../styles/HomePage.css'

function HomePage() {
  return (
    <div className='HomePage'>
      <br></br>
      <h3>My first proper website</h3>
      <h1>Languages Used</h1>
      <hr className='line'></hr>
      <br></br>
      <div className='ItemContainer'>
        <LanguageItem
          imgsrc={JSLogo}
          language={'JavaScript'}
          description={'I used JavaScript to do create all the features that you can interact with'}
          webLink='https://www.javascript.com/'
        />
        <LanguageItem
          imgsrc={Logo}
          language={'React'}
          description={'I used React to create all the components of the UI elements'}
          webLink='https://reactjs.org/'
        /><LanguageItem
          imgsrc={CSSLogo}
          language={'CSS'}
          description={'I used CSS to change the design of the various UI components'}
          webLink='https://www.w3schools.com/css/css_intro.asp'
        />
      </div>
      <br></br>
      <h3>I got the images from <i>places</i></h3>
    </div>
  )
}

export default HomePage