import * as React from "react";
import "./Home.css";
import ReactTypingEffect from "react-typing-effect";
import { Button, BlockPresentation, SkillSection } from "../index";

interface Props {}

export const Home: React.FC<Props> = () => {
    const textToType: string[] = ["developer !", "student !", "passionate !"];

    return (
        <div>
            {/*<div>Welcome to my website ! 🚀</div>
            <br />*/}
            <div>
                <p className="text-3xl">Hi 👋 I'm Jonathan,</p>
                <p className="text-3xl">
                    a{" "}
                    <ReactTypingEffect
                        text={textToType}
                        speed={75}
                        eraseSpeed={90}
                        typingDelay={1000}
                        eraseDelay={2000}
                    />
                </p>
            </div>
            <br />
            <Button value="Contact Me" path="contact" />
            <br />
            <BlockPresentation />
            <br />
            <SkillSection />
        </div>
    );
};
