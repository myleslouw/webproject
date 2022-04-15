import React from 'react'
import '../styles/ProjectComponent.css'

function ProjectComponent({ ProjectLink, ProjectName, ProjectDesc }) {
  return (
    <div className='ProjectPanel' onClick={() => GoToProject(ProjectLink)}>
        <h3 className='ProjectTitle'>{ProjectName}</h3>
        <p className='ProjectDesc'>{ProjectDesc}</p>
    </div>
  )
}

function GoToProject(githubaddress) {
    //this funtion will go to one of the project's github pages
    window.open(githubaddress)
}

export default ProjectComponent