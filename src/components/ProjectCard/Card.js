import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          {/* <li>
            <strong>Project Title:</strong> {props.name}
          </li>
          <li>
            <strong>Github Link:</strong> {props.github}
          </li>
          <li>
            <button>Deployed Link:</button> {props.deployed}
          </li> */}
          <li><strong>Project Title:</strong>{props.name}</li>
          <li className = "small-font"><strong>Project Description:</strong>{props.description}</li>
          <a href = {props.github}><button>Github Link</button></a>
          <a href = {props.deployed}><button>Deployed Link</button></a>

        </ul>
      </div>
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span> */}
    </div>
  );
}

export default ProjectCard;