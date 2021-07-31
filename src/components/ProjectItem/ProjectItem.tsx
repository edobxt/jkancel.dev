import * as React from "react";
import "./ProjectItem.css";
import { Button, ProjectBadge } from "../index";

interface Props {
    title: string;
    description: string;
    path: string;
    badges?: string[];
}

export const ProjectItem: React.FC<Props> = (props) => {
    return (
        <div className="ProjectItem">
            <div className="tile-project font-bold">
                <p className="text-2xl">{props.title}</p>
            </div>
            {(() => {
                if (props.badges) {
                    return (
                        <div className="badges-project flex space-x-2">
                            {props.badges.map((title) => (
                                <ProjectBadge title={title} />
                            ))}
                        </div>
                    );
                }
            })()}
            <br />
            <div className="description-project">
                <p>{props.description}</p>
            </div>
            <div className="button-project">
                <Button value="See more" path={`projects/${props.path}`} />
            </div>
        </div>
    );
};
