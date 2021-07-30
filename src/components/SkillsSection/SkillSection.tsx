import * as React from "react";
import "./SkillSection.css";
import { SkillItem } from "..";

interface Props {}

export const SkillSection: React.FC<Props> = () => {
    return (
        <div>
            <p className="skill-section-headline text-2xl font-bold italic">
                My Skills
            </p>
            <div className="inline-flex space-x-4">
                <SkillItem logo="code" name="Web Development" />
                <SkillItem logo="review" name="Code Review" />
                <SkillItem logo="storage" name="Database Management" />
            </div>
        </div>
    );
};
