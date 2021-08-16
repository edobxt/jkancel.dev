import * as React from "react";
import "./ProjectDetails.css";
import { useLocation } from "react-router";
import projectsDetails from "../../utils/projectsDetails";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { ProjectBadge } from "..";

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
        badges?: string[];
    };

    // Récupérer la route actuelle
    const location = useLocation();
    const route = location.pathname;
    // Récupérer uniquement le nom de la page
    const page = route.split("/")[2];
    //console.log(`page name : ${page}`);
    // Définir un projet en cas d'erreur
    let undefinedProject: Project = {
        title: "undefined",
        date: "undefined",
        url: "#",
        githubLink: "#",
        description: "undefined",
    };

    // switch (page) {
    //     case "ogites":
    //         project = projectsDetails.ogites;
    //         break;

    //     case "geoworld":
    //         project = projectsDetails.geoworld;
    //         break;
    // }

    const project =
        projectsDetails.find((projectItem) => projectItem.path === page) ||
        undefinedProject;
    //console.log(project);

    const faLink = <FontAwesomeIcon icon={faExternalLinkAlt} />;

    return (
        <div className="project-page">
            <div className="grid grid-cols-3">
                <Link to="/projects">
                    <button className="back-button">Back</button>
                </Link>
                <div className="project-title text-3xl font-bold">
                    {project.title.toUpperCase()}
                </div>
            </div>
            <div className="project-date text-2xl">{project.date}</div>
            <div className="project-badges">
                {(() => {
                    if (project.badges) {
                        return (
                            <div className="badges-project flex space-x-2">
                                {project.badges.map((title, i) => (
                                    <ProjectBadge title={title} key={i} />
                                ))}
                            </div>
                        );
                    }
                })()}
            </div>
            <div className="project-infos grid grid-cols-2">
                <div className="project-description">{project.description}</div>
                <div className="project-logo">
                    <img src={project.logo} alt={`${project.title}-logo`} />
                </div>
            </div>
            <div className="project-links grid grid-cols-2">
                <a href={project.url} target="_blank" rel="noreferrer">
                    Checkout this application {faLink}
                </a>
                <a href={project.githubLink} target="_blank" rel="noreferrer">
                    View the github page {faLink}
                </a>
            </div>
        </div>
    );
};
