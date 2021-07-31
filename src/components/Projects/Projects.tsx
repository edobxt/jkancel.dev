import * as React from "react";
import "./Projects.css";
import { ProjectItem } from "../index";

interface Props {}

export const Projects: React.FC<Props> = () => {
    return (
        <div>
            <p className="text-2xl">Checkout all my projects</p>
            <br />
            <div className="projects-container grid grid-cols-2 gap-4">
                <ProjectItem
                    title="Ô'GÎTES"
                    description="gites reservation app"
                    path="ogites"
                    badges={["PHP", "MYSQL"]}
                />
                <ProjectItem
                    title="Geoworld"
                    description="geopolitical info app"
                    path="geoworld"
                    badges={["PHP", "MYSQL"]}
                />
            </div>
        </div>
    );
};
