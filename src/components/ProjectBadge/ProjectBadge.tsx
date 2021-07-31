import * as React from "react";
import "./ProjectBadge.css";

interface Props {
    title: string;
}

export const ProjectBadge: React.FC<Props> = (props) => {
    return <div className="project-badge">{props.title}</div>;
};
