import * as React from "react";
import "./ProjectDetails.css";
import { useLocation } from "react-router";
import projectsDetails from "../../utils/projectsDetails";
import { Link } from "react-router-dom";

interface Props {}

export const ProjectDetails: React.FC<Props> = (props) => {
    // Type d'un projet
    type Project = {
        title: string;
        date: number | string;
        url: string;
        githubLink: string;
        description: string;
        logo?: string;
    };

    // Récupérer la route actuelle
    const location = useLocation();
    const route = location.pathname;
    // Récupérer uniquement le nom de la page
    const page = route.split("/")[2];

    let project: Project = {
        title: "undefined",
        date: "undefined",
        url: "#",
        githubLink: "#",
        description: "undefined",
    };

    switch (page) {
        case "ogites":
            project = projectsDetails.ogites;
            break;

        case "geoworld":
            project = projectsDetails.geoworld;
            break;
    }
    return (
        <div>
            <Link to="/projects">
                <button>Retour</button>
            </Link>
            <div className="grid grid-cols-2">
                <div className="project-title items-center">
                    <h1>TITLE : {project.title.toUpperCase()}</h1>
                    <div className="project-date">{project.date}</div>
                </div>
                <div className="project-image">
                    <img src={project.logo} alt="project-logo" />
                </div>
            </div>
            <div className="links grid grid-cols-2">
                <a href={project.url}>Checkout this application</a>
                <a href={project.githubLink}>There's the github page</a>
            </div>
            <br />
            <div className="description">{project.description}</div>
        </div>
    );
};
