import * as React from "react";
import "./BlockPresentation.css";
import logo from "../../assets/pp_lumiere2web_mini.png";
import { Button } from "../index";

interface Props {}

export const BlockPresentation: React.FC<Props> = () => {
    return (
        <div className="presentation">
            <img src={logo} alt="avatar" className="avatar" />
            <div className="presentation-text">
                I'm a junior developer and a student based in Guadeloupe a
                french caribbean island. I have been passionate about IT since
                childhood, development allows me to express myself and help
                others in their problems. If you want to collaborate with me
                don't hesitate, get in touch !!
            </div>
            <Button value="View my resume" path="resume" />
        </div>
    );
};
