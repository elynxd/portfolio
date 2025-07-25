import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@components/ui/card";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

const projects = [
    {
        id: 1,
        title: "Connect Consultoria",
        description:
            "A new Website to Connect Consultoria with modern design, focused on user experience, accessibility, and performance.",
        image: "https://www.connectconsultoria.com.br/Admin/api/data/imagem/uploads/entrada/logo-558738016.png",
        liveUrl: "#",
        sourceUrl: "#",
    },
    {
        title: "Project 2",
        description: "A brief description of the project.",
        image: "https://via.placeholder.com/300",
        liveUrl: "#",
        sourceUrl: "#",
    },
    {
        title: "Project 3",
        description: "A brief description of the project.",
        image: "https://via.placeholder.com/300",
        liveUrl: "#",
        sourceUrl: "#",
    },
];

export default function Projects() {
    return (
        <div className="container mx-auto pt-24 text-white">
            <h1 className="mb-8 text-center font-bold text-4xl tracking-wide">Projetos</h1>
            <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3">
                {projects.map(project => (
                    <Card key={project.id}>
                        <CardHeader>
                            <img src={project.image} alt={project.title} className="rounded-t-lg" />
                            <CardTitle className="mt-4">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{project.description}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Link to={project.liveUrl} target="_blank">
                                <Button>Live Demo</Button>
                            </Link>
                            <Link to={project.sourceUrl} target="_blank">
                                <Button variant="outline">Source Code</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
