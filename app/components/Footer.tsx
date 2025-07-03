import { format } from "date-fns";

export function Footer() {
    return (
        <footer className="p-4 text-center text-white">
            <p>&copy; {format(new Date(), "yyyy")} Eliandro Viana</p>
        </footer>
    );
}
