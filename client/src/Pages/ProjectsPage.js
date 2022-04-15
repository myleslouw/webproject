import React from 'react'
import '../styles/ProjectsPage.css'
import ProjectComponent from '../Components/ProjectComponent'

function ListPage() {
  return (
    <div className='ListPage'>
      <h1>Other Projects</h1>
      <hr className='HeadingLine'></hr>
      <div className='ProjectContainer'>
        <ProjectComponent
          ProjectLink={'https://github.com/myleslouw/webproject'}
          ProjectName={'That Pizza One Maybe?'}
          ProjectDesc={'You know...that one you started but then something in the css was wonky so you stopped. Make this sentence a bit longer.'}
        />
        <ProjectComponent
          ProjectLink={'https://github.com/myleslouw/webproject'}
          ProjectName={'Something New'}
          ProjectDesc={'Find something that is different to the others, something that is a bit more visually pleasing.'}
        />
        <ProjectComponent
          ProjectLink={'https://github.com/myleslouw/webproject'}
          ProjectName={'Something Difficult'}
          ProjectDesc={'Something that will be hard to make but look good on resume. This needs to be a bit longer to see how it would look with a longer description.'}
        />
        <ProjectComponent
          ProjectLink={'https://github.com/myleslouw/webproject'}
          ProjectName={'Additional Project'}
          ProjectDesc={'You should probably make more. This block is just an additional block/project to fill the screen.'}
        />
        <ProjectComponent
          ProjectLink={'https://github.com/myleslouw/webproject'}
          ProjectName={'Additional Project'}
          ProjectDesc={'You should probably make more. This block is just an additional block/project to fill the screen.'}
        />
        <ProjectComponent
          ProjectLink={'https://github.com/myleslouw/webproject'}
          ProjectName={'Additional Project'}
          ProjectDesc={'You should probably make more. This block is just an additional block/project to fill the screen.'}
        />
      </div>
    </div>
  )
}

export default ListPage