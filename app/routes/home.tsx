import { MotionWrapper } from "@components/MotionWrapper";
import { Button } from "@components/ui/button";
import { Link } from "react-router";
import GradientText from "@/components/GradientText";

export default function Home() {
    return (
        <div className="grid-row-1 grid items-center justify-center text-white md:grid-rows-3">
            <div className="flex-none md:h-1/3" />
            <div className="flex grow items-center justify-center p-4">
                <MotionWrapper
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="items-center justify-center text-center"
                >
                    <GradientText animationSpeed={8}>
                        <h1 className="z-20 font-bold text-4xl tracking-wide md:text-5xl">
                            Hi, I'm a Solutions Architect, Software Engineer and DevOps Engineer.
                        </h1>
                    </GradientText>
                    <p className="mt-4 text-xl tracking-wide">Criando bugs desde 2024.</p>
                    <div className="mt-8">
                        <Link to="/projects">
                            <Button>Projetos executados</Button>
                        </Link>
                    </div>
                </MotionWrapper>
            </div>
            <div className="flex-none md:h-1/3" />
        </div>
    );
}
