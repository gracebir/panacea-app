/** @format */

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface Section {
    heading: string;
    content: string | string[];
}

const TermsAndConditions: React.FC = () => {
    const { t } = useTranslation("global");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
            },
        },
    };

    const sections = t("termsAndConditions.sections", { returnObjects: true });

    return (
        <div className='max-w-6xl min-h-screen mx-auto px-6 lg:px-4 py-[5rem] font-montserrat'>
            <motion.div
                className='max-w-4xl text-sm lg:text-base'
                initial='hidden'
                animate='visible'
                variants={containerVariants}
            >
                <motion.h1
                    className='text-2xl lg:text-3xl font-bold mb-8'
                    variants={itemVariants}
                >
                    {t("termsAndConditions.title")}
                </motion.h1>

                {Object.keys(sections).map((sectionKey, idx) => {
                    //@ts-expect-error: no error
                    const section = sections[sectionKey] as Section;

                    return (
                        <motion.section
                            key={idx}
                            variants={itemVariants}
                            className='mb-8'
                        >
                            <h2 className='lg:text-xl text-lg font-bold mb-4'>
                                {section.heading}
                            </h2>

                            {Array.isArray(section.content) ? (
                                <ul className='list-disc pl-6 mb-4'>
                                    {section.content.map(
                                        (item: string, index: number) => (
                                            <li key={index} className='mb-2'>
                                                {item}
                                            </li>
                                        )
                                    )}
                                </ul>
                            ) : (
                                <p className='mb-4'>{section.content}</p>
                            )}
                        </motion.section>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default TermsAndConditions;
