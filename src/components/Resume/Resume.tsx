import * as React from "react";
import "./Resume.css";
import { MissingContent } from "../index";

interface Props {}

export const Resume: React.FC<Props> = () => {
    return (
        <div className="Resume">
            Resume
            <MissingContent />
        </div>
    );
};
