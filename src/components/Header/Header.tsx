import * as React from "react";
import "./Header.css";
import logo from "../../assets/kj-logo-mini.png";
import { Link } from "react-router-dom";

interface Props {}

export const Header: React.FC<Props> = () => {
    return (
        <div className="grid grid-cols-3 gap-2">
            <Link to="/">
                <img src={logo} alt="kj-logo" className="h-20" />
            </Link>
            <div className="flex space-x-8 items-center place-self-center">
                <Link to="/">
                    <span>Home</span>
                </Link>
                <Link to="/resume">
                    <span>Resume</span>
                </Link>
                <Link to="/projects">
                    <span>Projects</span>
                </Link>
                <Link to="/contact">
                    <span>Contact</span>
                </Link>
            </div>
        </div>
    );
};
