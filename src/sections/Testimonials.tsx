/** @format */

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TestimonialCard from "../components/TestimonialCard";
import { FC } from "react";

const Testimonials: FC<{
    title: string;
    content: Array<{ desc: string; names: string; position: string }>;
}> = ({ title, content }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const cardVariants = {
        hidden: (index: number) => ({
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
        }),
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className='flex flex-col w-full gap-10' ref={ref}>
            <div className='w-full flex '>
                <motion.h1
                    className={`text-2xl lg:text-3xl font-bold  max-w-md leading-10`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
                    }
                    transition={{ duration: 0.5 }}
                >
                    {title}
                </motion.h1>
            </div>
            <motion.div
                className='grid grid-cols-1 md:grid-cols-2 justify-items-center place-items-center w-full h-full gap-6 text-gray-600'
                variants={containerVariants}
                initial='hidden'
                animate={inView ? "visible" : "hidden"}
            >
                {content.map((item, index) => (
                    <motion.div
                        key={item.names}
                        variants={cardVariants}
                        custom={index}
                    >
                        <TestimonialCard {...item} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Testimonials;
