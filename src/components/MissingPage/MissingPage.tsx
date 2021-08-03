import * as React from "react";
import "./MissingPage.css";

interface Props {}

export const MissingPage: React.FC<Props> = () => {
    return (
        <div className="missing-page">
            <p className="text-3xl">
                Oops... It seems that this page is missing :/
            </p>
            <br />
            <p className="text-2xl">{"<Error404 />"}</p>
        </div>
    );
};
