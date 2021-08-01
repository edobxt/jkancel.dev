import * as React from "react";
import "./Resume.css";
import { ExperienceItem, ProgressBar } from "../index";
import ReactTypingEffect from "react-typing-effect";
import phpmyadmin from "../../assets/phpmyadmin-logo.png";
import mysql from "../../assets/mysql-logo.png";
import mariadb from "../../assets/mariadb-logo.png";
import vscode from "../../assets/vscode-logo.png";
import eclipse from "../../assets/eclipse-logo.svg";
import github from "../../assets/github-logo.svg";
import netlify from "../../assets/netlify-logo.png";
import gcp from "../../assets/gcp-logo.png";

interface Props {}

export const Resume: React.FC<Props> = () => {
    const textToType: string[] = [
        "resume",
        "curriculum vitae",
        "description",
        "skills",
        "experiences",
        "education",
    ];

    return (
        <div className="Resume">
            <p className="text-3xl">
                My{" "}
                <ReactTypingEffect
                    text={textToType}
                    speed={75}
                    eraseSpeed={90}
                    typingDelay={1000}
                    eraseDelay={5000}
                />
            </p>
            <br />
            <div className="grid grid-cols-2 gap-4">
                <div className="block-section">
                    <p className="text-2xl font-bold italic">Who am I ?</p>
                    <div className="infos">
                        <p>Full Name : KANCEL Jonathan</p>
                    </div>
                </div>
                <div className="block-section">
                    <p className="text-2xl font-bold italic">
                        Computer Science Skills
                    </p>
                    <div className="skills">
                        <div className="skill-section">
                            <p className="skills-title text-lg">
                                Programmation
                            </p>
                            <ProgressBar
                                title="HTML/CSS"
                                progressPercentage={90}
                            />
                            <ProgressBar
                                title="JAVASCRIPT"
                                progressPercentage={80}
                            />
                            <ProgressBar title="PHP" progressPercentage={70} />
                            <ProgressBar title="JAVA" progressPercentage={65} />
                            <ProgressBar
                                title="TYPESCRIPT"
                                progressPercentage={50}
                            />
                            <ProgressBar
                                title="REACT.JS"
                                progressPercentage={60}
                            />
                            <ProgressBar
                                title="PYTHON"
                                progressPercentage={39}
                            />
                        </div>
                        <div className="skill-section">
                            <p className="skills-title text-lg">
                                Database Management
                            </p>
                            <ProgressBar title="SQL" progressPercentage={80} />
                            <div className="database-logo-container grid grid-cols-3 gap-2">
                                <img
                                    src={phpmyadmin}
                                    alt="phpmyadmin-logo"
                                    className="database-logo"
                                />
                                <img
                                    src={mysql}
                                    alt="mysql-logo"
                                    className="database-logo"
                                />
                                <img
                                    src={mariadb}
                                    alt="mariadb-logo"
                                    className="database-logo"
                                />
                            </div>
                        </div>
                        <div className="skill-section">
                            <p className="skills-title text-lg">
                                Softwares and IDE's
                            </p>
                            <div className="software-logo-container grid grid-cols-3 gap-2">
                                <img
                                    src={vscode}
                                    alt="vscode-logo"
                                    className="software-logo"
                                />
                                <img
                                    src={eclipse}
                                    alt="eclipse-logo"
                                    className="software-logo"
                                />
                                <img
                                    src={github}
                                    alt="github-logo"
                                    className="software-logo"
                                />
                            </div>
                        </div>
                        <div className="skill-section">
                            <p className="skills-title text-lg">
                                Cloud Hosting Services
                            </p>
                            <div className="software-logo-container grid grid-cols-2">
                                <img
                                    src={gcp}
                                    alt="gcp-logo"
                                    className="software-logo"
                                />
                                <img
                                    src={netlify}
                                    alt="netlify-logo"
                                    className="software-logo"
                                />
                            </div>
                        </div>
                        <div className="skill-section">
                            <p className="skills-title text-lg">Office tools</p>
                            <p className="office-section-text">
                                Maîtrise experte de la suite Microsoft (Word,
                                Excel, Powerpoint) et Google Workspace.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="full-w-section experience">
                <p className="text-2xl font-bold italic">
                    My professional experience
                </p>
                <ExperienceItem
                    title="CONCEPT X FORMATION"
                    date="Dec 2020 - Jan 2021"
                    description="Stage conventioné - Développement d'un intranet et maintenance informatique"
                />
                <ExperienceItem
                    title="CANOPé"
                    date="Dec 2015"
                    description="Stage de découverte - Infographie, Montage vidéo, Maintenance informatique"
                />
            </div>
            <div className="full-w-section education">
                <p className="text-2xl font-bold italic">Education</p>
                <ExperienceItem
                    title="BTS Services Informatiques aux Organisations "
                    option="Solutions Logicielles et Applications Métiers"
                    date="2019-2021"
                />
                <ExperienceItem
                    title="BAC Scientifique"
                    option="Sciences de l' Ingénieur"
                    date="2019"
                />
            </div>
        </div>
    );
};
