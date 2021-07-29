import * as React from "react";
import "./Header.css";
import logo from "../../assets/kj-logo-mini.png";

interface Props {}

export const Header: React.FC<Props> = () => {
    return (
        <div className="grid grid-cols-3 gap-2">
            <img src={logo} alt="kj-logo" className="h-20" />
            <div className="flex space-x-8 items-center place-self-center">
                <a href="#">Home</a>
                <a href="#">Resume</a>
                <a href="#">Projects</a>
                <a href="#">Contacts</a>
            </div>
        </div>
    );
};
