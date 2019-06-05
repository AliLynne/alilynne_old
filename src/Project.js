import React from 'react';

// Expected Usage
// <Project 
//  projectName={projectName} 
//  projectImage={projectImage}
//  imgAltText={imgAltText}
//  description={projectDescription}
//  exampleLink={exampleLink}
//  sourceLink={sourceLink}
//  />

function Project(props) {
  return (
    <div className="Project">
      <ul className="Project__List">
        <li className="Project__ListItem">
          <h4 className="Project__Name">{props.projectName}</h4>
        </li>
        <li className="Project__ListItem">
          <p classname="Project__Description">{props.description}</p>
        </li>
        <li className="Project__ListItem">
          <a className="Project__Link" href={props.sourceLink}>View Source</a>
        </li>
        <li className="Project__Link">
          <a href={props.exampleLink}>View Example</a>
        </li>
      </ul>
    </div>
  );
}

export default Project;