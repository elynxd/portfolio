import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
    return (
        <div className="container mx-auto bg-gray-900 p-4 text-white">
            <h1 className="mb-8 text-center font-bold text-4xl">About Me</h1>
            <div className="grid grid-cols-1 gap-8 align-baseline md:grid-cols-1">
                <div>
                    <h2 className="mb-4 font-bold text-2xl">Who I Am</h2>
                    <p>
                        I am a passionate DevOps and Developer with a love for building and
                        deploying scalable and reliable web applications. I have experience in all
                        aspects of the software development lifecycle, from planning and design to
                        implementation and deployment.
                    </p>
                </div>
                <div>
                    <h2 className="mb-4 font-bold text-2xl">My Skills</h2>
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
