import * as React from "react";
import "./Resume.css";
import { ExperienceItem } from "../index";
import ReactTypingEffect from "react-typing-effect";

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
                <div className="block-section infos">
                    <p className="text-2xl font-bold italic">Who am I ?</p>
                    <p>Full Name : KANCEL Jonathan</p>
                </div>
                <div className="block-section skills">
                    <p className="text-2xl font-bold italic">
                        Computer Science Skills
                    </p>
                </div>
            </div>
            <div className="full-w-section experience">
                <p className="text-2xl font-bold italic">
                    My professional experience
                </p>
                <ExperienceItem
                    title="CONCEPT X FORMATION"
                    date="Dec 2020 - Jan 2021"
                    description="Stage conventioné"
                />
                <ExperienceItem
                    title="CANOPé"
                    date="2015"
                    description="Stage de découverte"
                />
            </div>
            <div className="full-w-section education">
                <p className="text-2xl font-bold italic">Education</p>
                <ExperienceItem
                    title="BTS Services Informatiques aux Organisations option Solutions Logicielles et Applications Métiers"
                    date="2019-2021"
                />
                <ExperienceItem
                    title="BAC Scientifique option Sciences de l'Ingénieur"
                    date="2019"
                />
            </div>
        </div>
    );
};
