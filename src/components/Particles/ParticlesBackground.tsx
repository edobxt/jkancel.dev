import * as React from "react";
import Particles from "react-tsparticles";
import ParticlesConfig from "../../config/particle-config";

interface Props {}

export const ParticlesBackground: React.FC<Props> = () => {
    return <Particles params={{ ParticlesConfig }} />;
};
