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
                <SkillItem
                    logo="code"
                    name="Web Development"
                    description="HTML, CSS, JS, React, PHP"
                />
                <SkillItem
                    logo="review"
                    name="Code Review"
                    description="Check if your code is good and convenent."
                />
                <SkillItem
                    logo="storage"
                    name="Database Management"
                    description="Manage database with phpMyAdmin."
                />
            </div>
        </div>
    );
};
