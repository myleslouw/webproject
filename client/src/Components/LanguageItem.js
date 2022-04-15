import React from 'react'
import '../styles/LanguageItem.css'

function LanguageItem({imgsrc ,language, description, webLink}) {
  return (
    <div className='Panel'>
        <img src={imgsrc} className='languageImg'></img>
        <h2 className='langTitle'>{language}</h2>
        <p className='langDesc'>{description}</p>
        <button className='langButton' onClick={() => GoToWebPage(webLink)}>click?</button>
      </div>
  )
}

function GoToWebPage(address){
  //this function will take the user to the page of the language they clicked on
  window.open(address);
}

export default LanguageItem