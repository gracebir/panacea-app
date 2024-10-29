/** @format */

import { FC } from "react";
import { motion } from "framer-motion";

const Heading: FC<{ text: string; isStart?: boolean; inView?: boolean }> = ({
    text,
    isStart = false,
    inView = false,
}) => {
    return (
        <motion.h1
            className={`text-2xl lg:text-3xl font-bold max-w-sm ${
                isStart ? "text-start" : "text-center"
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            {text}
        </motion.h1>
    );
};

export default Heading;
