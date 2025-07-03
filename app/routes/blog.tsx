import { Link } from "react-router";

export default function Blog() {
    return (
        <div className="container mx-auto pt-24 text-white">
            <h1 className="mb-8 text-center font-bold text-4xl tracking-wide">Blog</h1>
            <div className="flex flex-col items-center justify-center p-4">
                <div className="mt-16 flex flex-col gap-12">
                    <div className="flex flex-row items-start justify-start gap-16">
                        <p className="flex flex-col font-semibold text-5xl">
                            19
                            <span className="font-medium text-base">abr. 2024</span>
                        </p>
                        <Link
                            className="cursor-pointer transition-transform duration-200 hover:text-green-400 hover:underline"
                            rel="noreferrer"
                            to="#post"
                        >
                            <div className="flex flex-col items-start justify-start gap-4">
                                <h1 className="font-normal text-3xl">
                                    Lorem ipsum dolor sit amet bla bla bla bla
                                </h1>
                                <p className="font-normal text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                                    convallis egestas rhoncus.
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
