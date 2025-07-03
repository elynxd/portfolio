import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import Aurora from "@/components/Aurora";
import { Button } from "./ui/button";

const menuItems = [
    { id: 1, name: "Sobre mim", path: "/about" },
    { id: 2, name: "Projetos", path: "/projects" },
    { id: 3, name: "Contato", path: "/contact" },
    { id: 4, name: "Blog", path: "/blog" }, // Blog Contentful
];

export function Header() {
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="flex text-white">
            <Aurora />
            <div className="container z-40 mx-auto flex items-center justify-between px-4 py-12">
                <div id="logo" className="font-bestermind text-5xl">
                    <Link to="/">Eliandro Viana</Link>
                </div>
                <nav className="relative z-50 hidden h-fit w-auto md:block">
                    <ul className="flex space-x-8">
                        {menuItems.map(item => (
                            <li key={item.id}>
                                <Link
                                    className="relative font-semibold text-gray-50 text-xl transition-colors duration-200 hover:text-lime-300"
                                    to={item.path}
                                    onMouseEnter={() => setHoveredItem(item.id)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    {item.name}
                                    <span
                                        style={{
                                            transform:
                                                hoveredItem === item.id ? "scaleX(1)" : "scaleX(0)",
                                        }}
                                        className="-left-1 -right-1 -bottom-2 absolute h-1.5 origin-left bg-white/10 transition-transform duration-200 ease-out"
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="z-50 p-3 md:hidden">
                <Button onClick={toggleMenu} className="bg-zinc-900 text-white focus:outline-none">
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-0 left-0 z-40 flex h-full w-full flex-col items-center gap-12 bg-zinc-900 pt-22 md:hidden"
                    >
                        <div id="logo" className="font-bestermind text-5xl">
                            <Link to="/">Eliandro Viana</Link>
                        </div>
                        <nav className="relative h-fit w-auto">
                            <ul className="flex flex-col items-center space-y-4 py-4 font-medium text-2xl">
                                {menuItems.map(item => (
                                    <li key={item.id}>
                                        <Link
                                            className="relative font-semibold text-zinc-50"
                                            to={item.path}
                                            onClick={toggleMenu}
                                            onMouseEnter={() => setHoveredItem(item.id)}
                                            onMouseLeave={() => setHoveredItem(null)}
                                        >
                                            {item.name}
                                            <span
                                                style={{
                                                    transform:
                                                        hoveredItem === item.id
                                                            ? "scaleX(1)"
                                                            : "scaleX(0)",
                                                }}
                                                className="-left-1 -right-1 -bottom-1.5 absolute h-1 origin-left bg-lime-400 transition-transform duration-200 ease-out"
                                            />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
