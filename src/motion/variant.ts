/** @format */

export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            type: "spring",
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
};

export const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        type: "spring",
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};
