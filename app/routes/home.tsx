import { MotionWrapper } from "@components/MotionWrapper";
import { Button } from "@components/ui/button";
import { Link } from "react-router";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
            <MotionWrapper
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h1 className="font-bold text-5xl">Hi, I'm a DevOps and Fullstack Developer</h1>
                <p className="mt-4 text-xl">Criando bugs desde 2024.</p>
                <div className="mt-8">
                    <Link to="/projects">
                        <Button>Projetos executados</Button>
                    </Link>
                </div>
            </MotionWrapper>
        </div>
    );
}
