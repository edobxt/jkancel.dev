import * as React from "react";
import "./SkillItem.css";
import code from "../../assets/code-logo.png";
import review from "../../assets/review-logo.png";
import storage from "../../assets/storage-logo.png";

interface Props {
    name: string;
    logo: string;
}

export const SkillItem: React.FC<Props> = (name, logo) => {
    const typeLogo: string = name.logo;
    let skillLogo;
    switch (typeLogo) {
        case "code":
            skillLogo = <img src={code} alt="code-logo" />;
            break;
        case "review":
            skillLogo = <img src={review} alt="review-logo" />;
            break;
        case "storage":
            skillLogo = <img src={storage} alt="storage-logo" />;
    }

    return (
        <div className="skill-item flex-1">
            <div className="skill-logo">{skillLogo}</div>
            <div className="skill-name">
                <p>{`${name.name}`}</p>
            </div>
        </div>
    );
};
