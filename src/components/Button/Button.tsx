import * as React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

interface Props {
    value: string;
    path: string;
}

export const Button: React.FC<Props> = ({ value, path }) => {
    return (
        <div>
            <Link to={`/${path}`}>
                <button>{value}</button>
            </Link>
        </div>
    );
};
