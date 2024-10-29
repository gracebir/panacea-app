/** @format */

import React from "react";
import { containerVariants, itemVariants } from "../motion/variant";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const Banner: React.FC<{
    imgUrl: { desktop: string; mobile: string };
    contentKey: string;
    isRight?: boolean;
}> = ({ imgUrl, isRight = false, contentKey }) => {
    const [t] = useTranslation("global");
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const title = t(`${contentKey}.title`);
    const description = t(`${contentKey}.description`);
    return (
        <motion.section
            ref={ref}
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='w-full md:min-h-[30.5rem] h-auto md:h-full relative font-montserrat overflow-hidden my-4 lg:my-6'
        >
            <div className='absolute top-0 bottom-0 left-0 w-full h-full'>
                <img
                    className='w-full h-full hidden md:block object-cover'
                    src={imgUrl.desktop}
                    loading='lazy'
                    alt={title}
                />
                <img
                    className='w-full h-full md:hidden block object-cover'
                    src={imgUrl.mobile}
                    loading='lazy'
                    alt={`monb-${title}`}
                />
            </div>
            <div className='absolute w-full h-full z-10 bg-black bg-opacity-50 right-0 top-0 bottom-0 inset-0'></div>
            <div className='max-w-6xl md:min-h-[30.5rem] h-auto md:h-full mx-auto px-6 lg:px-4 grid grid-cols-1 relative z-20 md:grid-cols-2 gap-6 lg:gap-8'>
                <div className={`${isRight ? "order-1" : "order-2"}`}></div>
                <motion.div
                    className={`${
                        isRight ? "order-2" : "order-1"
                    } text-white flex flex-col justify-center md:gap-7 gap-5 py-6 lg:py-8 h-full`}
                    variants={itemVariants}
                >
                    <motion.h1
                        className={`text-3xl lg:text-4xl font-bold max-w-md `}
                        initial={{ opacity: 0, y: -20 }}
                        animate={
                            inView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: -20 }
                        }
                        transition={{ duration: 0.5 }}
                    >
                        {title}
                    </motion.h1>
                    <motion.p className='text-base text-muted-foreground font-medium  tracking-wide'>
                        {description}
                    </motion.p>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Banner;
