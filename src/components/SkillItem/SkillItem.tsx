import * as React from "react";
import "./SkillItem.css";
import code from "../../assets/code-logo.png";
import review from "../../assets/review-logo.png";
import storage from "../../assets/storage-logo.png";
import { useState } from "react";

interface Props {
    name: string;
    logo: string;
    description?: string;
}

export const SkillItem: React.FC<Props> = (name, logo) => {
    const [showDescription, setShowDescription] = useState(false);

    // Nom du logo voulu
    const typeLogo: string = name.logo;
    // Switch permettant d'afficher le logo en fonction de props logo
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

    // Contenu du SkillItem à partir des props
    const skillValueWithLogo = (
        <div>
            <div className="skill-logo">{skillLogo}</div>
            <div className="skill-name">
                <p>{`${name.name}`}</p>
            </div>
        </div>
    );

    const skillDescription = (
        <div className="skill-description">
            <p>{`${name.description}`}</p>
        </div>
    );

    return (
        <div
            className="skill-item flex-1"
            onMouseEnter={() => setShowDescription(true)}
            onMouseLeave={() => setShowDescription(false)}
        >
            {showDescription ? skillDescription : skillValueWithLogo}
        </div>
    );
};
