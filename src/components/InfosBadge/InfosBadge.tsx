import * as React from "react";
import "./InfosBadge.css";

interface Props {
    title: string;
    color?: string;
}

export const InfosBadge: React.FC<Props> = (props) => {
    const pastelColors: string[] = [
        "#ABDEE6",
        "#CBAACB",
        "#FFFFB5",
        "#FFCCB6",
        "#F3B0C3",
        "#C6DBDA",
        "#FEE1E8",
        "#FED7C3",
        "#F6EAC2",
        "#ECD5E3",
        "#FF968A",
        "#FFAEA5",
        "#FFC5BF",
        "#FFD8BE",
        "#FFC8A2",
        "#D4F0F0",
        "#8FCACA",
        "#CCE2CB",
        "#B6CFB6",
        "#97C1A9",
        "#FCB9AA",
        "#FFDBCC",
        "#ECEAE4",
        "#A2E1DB",
        "#55CBCD",
    ];
    const randomPastelColorIndex: number = Math.floor(
        Math.random() * pastelColors.length
    );
    const randomPastelColor: string = pastelColors[randomPastelColorIndex];

    const style = {
        backgroundColor: props.color ? props.color : randomPastelColor,
    };

    return (
        <div className="infos-badge" style={style}>
            <p className="text-lg">{props.title}</p>
        </div>
    );
};
