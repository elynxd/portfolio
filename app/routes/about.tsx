import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
    return (
        <div className="container mx-auto pt-24 text-white">
            <h1 className="mb-8 text-center font-bold text-4xl tracking-wide">Sobre mim</h1>
            <div className="grid grid-cols-1 gap-8 align-baseline md:grid-cols-1">
                <div>
                    <h2 className="mb-4 font-bold text-2xl">Quem Sou Eu</h2>
                    <p>
                        Sou um DevOps e Desenvolvedor apaixonado, com amor por construir e implantar
                        aplicações web escaláveis e confiáveis. Tenho experiência em todos os
                        aspectos do ciclo de vida do desenvolvimento de software, desde o
                        planejamento e design até a implementação e implantação.
                    </p>
                </div>
                <div>
                    <h2 className="mb-4 font-bold text-2xl">Minhas Habilidades</h2>
                    <div className="grid grid-cols-3 gap-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Frontend</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-inside list-none">
                                    <li>React.js</li>
                                    <li>React Router</li>
                                    <li>TypeScript</li>
                                    <li>Zustand</li>
                                    <li>Tailwind CSS</li>
                                    <li>Framer Motion</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Backend</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-inside list-none">
                                    <li>SpringBoot 3</li>
                                    <li>Golang</li>
                                    <li>PostgreSQL & DynamoDB</li>
                                    <li>Docker</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>DevOps</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-inside list-none">
                                    <li>CI/CD Pipelines</li>
                                    <li>Kubernetes</li>
                                    <li>AWS</li>
                                    <li>Terraform</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
