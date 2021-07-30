import * as React from "react";
import "./BlockPresentation.css";
import logo from "../../assets/pp_lumiere2web_mini.png";

interface Props {}

export const BlockPresentation: React.FC<Props> = () => {
    return (
        <div className="presentation">
            <img src={logo} alt="avatar" className="avatar" />
            <div className="presentation-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                sit amet erat erat. Duis finibus dapibus fermentum. Mauris id
                odio maximus, accumsan mi at, venenatis enim. Suspendisse at
                rutrum ipsum. Nam eget porttitor urna. Aenean eleifend
                pellentesque nisl eu facilisis.
            </div>
        </div>
    );
};
