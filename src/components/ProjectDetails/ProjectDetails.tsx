import * as React from "react";
import { useLocation } from "react-router";
import projectsDetails from "../../utils/projectsDetails";

interface Props {}

export const ProjectDetails: React.FC<Props> = (props) => {
    // Récupérer la route actuelle
    const location = useLocation();
    const route = location.pathname;
    // Récupérer uniquement le nom de la page
    const page = route.split("/")[2];

    let title, date;
    switch (page) {
        case "ogites":
            title = projectsDetails.ogites.title;
            date = projectsDetails.ogites.date;
            break;

        case "geoworld":
            title = projectsDetails.geoworld.title;
            date = projectsDetails.geoworld.date;
    }
    return <div>{`Project ${title} created in ${date}`}</div>;
};
