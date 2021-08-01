import * as React from "react";
import "./ExperienceItem.css";

interface Props {
    title: string;
    date: string;
    description?: string;
}

export const ExperienceItem: React.FC<Props> = (props) => {
    return (
        <div className="experience-item grid grid-cols-2">
            <div className="experience-date">
                <p>{props.date}</p>
            </div>
            <div className="experience-title">
                <p className="font-bold">{props.title}</p>
                {(() => {
                    if (props.description) {
                        return (
                            <div className="experience-description">
                                {props.description}
                            </div>
                        );
                    }
                })()}
            </div>
        </div>
    );
};
