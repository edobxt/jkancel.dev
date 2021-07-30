import * as React from "react";
import "./Home.css";
import ReactTypingEffect from "react-typing-effect";
import { Button, BlockPresentation } from "../index";

interface Props {}

export const Home: React.FC<Props> = () => {
    const textToType: string[] = ["developer !", "student !"];

    return (
        <div>
            <div>Welcome to my website ! 🚀</div>
            <br />
            <div>
                <p className="text-2xl">
                    Hi 👋 I'm Jonathan, a{" "}
                    <ReactTypingEffect
                        text={textToType}
                        speed={75}
                        typingDelay={1000}
                        eraseDelay={2000}
                    />
                </p>
            </div>
            <br />
            <Button value="Contact Me" path="contact" />
            <br />
            <BlockPresentation />
        </div>
    );
};
