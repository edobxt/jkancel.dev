import * as React from "react";
import "./MissingContent.css";

interface Props {}

export const MissingContent: React.FC<Props> = () => {
    return (
        <div className="missing-content">
            <p className="text-4xl">{"<ComingSoon />"}</p>
        </div>
    );
};
