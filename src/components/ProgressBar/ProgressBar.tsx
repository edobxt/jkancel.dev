import * as React from "react";
import "./ProgressBar.css";

interface Props {
    title: string;
    progressPercentage: number;
}

export const ProgressBar: React.FC<Props> = (props) => {
    const percentage = props.progressPercentage;

    let color;
    switch (true) {
        case percentage >= 70:
            color = "bg-green-400";
            break;
        case percentage < 70 && percentage >= 40:
            color = "bg-yellow-400";
            break;
        case percentage < 40:
            color = "bg-red-400";
            break;
    }

    return (
        <div className="progress-bar-component">
            <p className="font-medium">{props.title}</p>
            <div className="progress-bar h-2 w-full bg-white-300">
                <div
                    style={{ width: `${props.progressPercentage}%` }}
                    className={`h-full ${color}`}
                ></div>
            </div>
        </div>
    );
};
