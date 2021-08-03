import * as React from "react";
import "./Projects.css";
import { ProjectItem } from "../index";

interface Props {}

export const Projects: React.FC<Props> = () => {
    return (
        <div>
            <p className="text-2xl">Checkout all my projects 👨🏾‍💻</p>
            <br />
            <div className="projects-container grid grid-cols-2 gap-4">
                <ProjectItem
                    title="Ô'GÎTES"
                    description="Hostel booking app created as part of a group study project with the SCRUM methodology."
                    path="ogites"
                    badges={["PHP", "MYSQL", "SCRUM"]}
                />
                <ProjectItem
                    title="Geoworld"
                    description="Geopolitical info app created as part of a group study project."
                    path="geoworld"
                    badges={["PHP", "MYSQL"]}
                />
            </div>
        </div>
    );
};
