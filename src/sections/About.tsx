/** @format */

import Heading from "../components/Heading";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../motion/variant";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { about } from "../utils/constant";
import { useTranslation } from "react-i18next";

function About() {
    const [isHovered, setIsHovered] = useState(false);
    const [t] = useTranslation("global");
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (
        <motion.section
            className='grid grid-cols-1 lg:grid-cols-2 gap-8 about-scroll lg:gap-12'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            ref={ref}
            id='about'
        >
            <motion.div
                className='lorder-1 relative overflow-hidden about-scroll w-full h-auto max-w-[560px] lg:order-1 rounded-lg shadow-lg'
                variants={itemVariants}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
            >
                <motion.div
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                    className=' h-full w-full'
                >
                    <img
                        src={about.imgUrl}
                        alt='about icupa'
                        className='w-full h-full object-cover'
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className='flex flex-col order-2 lg:order-2  gap-8 lg:justify-around items-center py-0 lg:py-6 lg:items-start'
                variants={itemVariants}
            >
                <Heading
                    inView={inView}
                    isStart={true}
                    text={t("about.title")}
                />
                <p className='text-base text-muted-foreground  tracking-wide'>
                    {t("about.content")}
                </p>
                <Link
                    to='/download-app'
                    className='px-4 py-3 flex duration-300 items-center gap-2 bg-gray-200  text-gray-800 rounded-full text-xs lg:text-sm font-medium hover:bg-gray-300'
                >
                    <span>{t("about.cta")}</span>
                </Link>
            </motion.div>
        </motion.section>
    );
}

export default About;
