import * as React from "react";
import "./Projects.css";
import { ProjectItem } from "../index";
import projectDetails from "../../utils/projectsDetails";

interface Props {}

export const Projects: React.FC<Props> = () => {
    return (
        <div>
            <p className="text-2xl">Checkout all my projects 👨🏾‍💻</p>
            <br />
            <div className="projects-container grid lg:grid-cols-2 grid-cols-1 gap-4">
                {projectDetails.map((project) => {
                    return (
                        <ProjectItem
                            title={project.title}
                            description={project.description}
                            path={project.path}
                            badges={project.badges}
                        />
                    );
                })}
            </div>
        </div>
    );
};
