import * as React from "react";
import "./Header.css";
import logo from "../../assets/kj-logo-mini.png";
import { Link } from "react-router-dom";

interface Props {}

export const Header: React.FC<Props> = () => {
    return (
        <div className="grid grid-cols-3 gap-2">
            <img src={logo} alt="kj-logo" className="h-20" />
            <div className="flex space-x-8 items-center place-self-center">
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
};
