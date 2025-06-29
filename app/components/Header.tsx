import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
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
        <header className="flex items-center justify-between bg-gray-900 p-4 px-12 text-white">
            <div id="logo" className="font-bestermind text-3xl">
                <Link to="/">Eliandro Viana</Link>
            </div>
            <nav className="relative hidden h-fit w-auto md:block">
                <ul className="flex space-x-8">
                    {menuItems.map(item => (
                        <li key={item.id}>
                            <Link
                                className="relative font-semibold text-lime-400 text-xl transition-colors duration-200 hover:text-gray-50"
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
                                    className="-left-1 -right-1 -bottom-1.5 absolute h-1 origin-left bg-lime-400 transition-transform duration-200 ease-out"
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="md:hidden">
                <Button onClick={toggleMenu} className="text-white focus:outline-none">
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-0 w-full bg-gray-900 md:hidden"
                    >
                        <nav className="relative h-fit w-auto">
                            <ul className="flex flex-col items-center space-y-4 py-4 font-medium">
                                {menuItems.map(item => (
                                    <li key={item.id}>
                                        <Link
                                            className="relative font-semibold text-lime-400 transition-colors duration-200 hover:text-gray-50"
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
