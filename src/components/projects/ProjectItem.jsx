import React from "react";
import {AiFillGithub} from "react-icons/ai"

function ProjectItem({image, name, desc, link}) {
    return (
        <div className="pi-projectItem">
            <div style={{backgroundImage: `url(${image})`}} className="pi-bg-Image">
            </div>
            <h1>{name}</h1>
            <div>{desc}</div>
            <div className="pi-icon">
                <a href={link} target="_blank" className="c-info-item"><AiFillGithub size={42}/><div className="c-inside"></div></a>
            </div>
        </div>
    )
}

export default ProjectItem;