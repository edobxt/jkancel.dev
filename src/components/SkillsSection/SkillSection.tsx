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
            <div className="md:inline-flex md:space-x-4 grid-cols-1">
                <SkillItem
                    logo="code"
                    name="Web Development"
                    description="HTML/CSS/JS, TypeScript, React, PHP"
                />
                <SkillItem
                    logo="review"
                    name="Code Review"
                    description="I can check if your code is good and convenent."
                />
                <SkillItem
                    logo="storage"
                    name="Database Management"
                    description="I can manage databases with phpMyAdmin."
                />
            </div>
        </div>
    );
};
