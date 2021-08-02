import * as React from "react";
import "./InfoBar.css";

interface Props {
    title: string;
    type: string;
}

export const InfoBar: React.FC<Props> = (props) => {
    let bgColor: string = "";
    let txtColor: string = "";

    switch (props.type) {
        case "dev":
            bgColor = "#fefefe";
            txtColor = "#000";
            break;
        case "maintenace":
            bgColor = "red";
            txtColor = "#fefefe";
            break;
    }

    const styles = {
        backgroundColor: bgColor,
        color: txtColor,
    };

    return (
        <div className="info-bar" style={styles}>
            <p>{props.title}</p>
        </div>
    );
};
