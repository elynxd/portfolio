import { motion, type TargetAndTransition, type Transition } from "framer-motion";
import { useEffect, useState } from "react";

interface MotionWrapperProps {
    children: React.ReactNode;
    className?: string;
    initial?: TargetAndTransition;
    animate?: TargetAndTransition;
    transition?: Transition;
}

export function MotionWrapper({
    children,
    className,
    initial,
    animate,
    transition,
}: MotionWrapperProps) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial={initial}
            animate={animate}
            transition={transition}
            className={className}
        >
            {children}
        </motion.div>
    );
}
