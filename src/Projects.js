import React from 'react';
import Project from './Project';
import './Projects.css';

// Expected usage

//  <Projects
//    list={projectsList}
//  />

const list = [
  {
    "id": "15437",
    "name": "Personal Website Components",
    "description": "React components for my personal website created using Material UI.",
    "example": "https://alilynne.github.io/MaterialUiComponents/",
    "source": "https://github.com/AliLynne/MaterialUiComponents/"
  }
]

function Projects(props) {
  return (
    <div className="Projects">
      <h3 className="Projects__Headline">I am a list of Projects</h3>
      <ul className="Projects__List">
        {list.map((project) => {
          return (
            <li className="Projects__ListItem" key={project.id}>
              <Project  
                projectName={project.name}
                projectDescription={project.description}
                exampleLink={project.example}
                sourceLink={project.source}
                />
            </li>
          );
        })}

      </ul>
    </div>
  );
}

export default Projects;