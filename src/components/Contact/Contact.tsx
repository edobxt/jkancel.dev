import * as React from "react";
import "../Contact/Contact.css";
import ReactTypingEffect from "react-typing-effect";

interface Props {}

export const Contact: React.FC<Props> = () => {
    const textToType: string[] = ["a mission", "a project", "some advices"];

    return (
        <div>
            <div>
                <p className="text-3xl">Collaborate with me ! 🤝🏾</p>
                <br />
                <p className="text-2xl">
                    If you need someone for{" "}
                    <ReactTypingEffect
                        text={textToType}
                        speed={75}
                        eraseSpeed={90}
                        typingDelay={1000}
                        eraseDelay={2000}
                    />
                </p>
                <div className="mail-box">
                    <div className="mail">
                        <p>KANCEL Jonathan</p>
                        <p className="font-bold">kanjo.work@gmail.com</p>
                    </div>
                    <br />
                    <div className="mail-button">
                        <button>
                            <a href="mailto:kanjo.work@gmail.com">
                                Send me an email
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
