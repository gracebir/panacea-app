/** @format */

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

export interface BulletPoint {
    title: string;
    description: string;
}

interface SectionProps {
    title: string;
    bulletPoints: Array<BulletPoint>;
    imageUrl: string;
    imageAlt: string;
    imageOnRight?: boolean;
    isImageVertical?: boolean;
    asActionButton?: boolean;
    actionText?: string | null;
}

export default function ServiceSection({
    title,
    bulletPoints,
    imageUrl,
    imageAlt,
    imageOnRight = false,
    isImageVertical = false,
    asActionButton = false,
    actionText = null,
}: SectionProps) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const { t } = useTranslation("global");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const ContentSection = () => (
        <div
            className={`${
                imageOnRight ? "md:order-1 order-2" : "md:order-2 order-1"
            } space-y-6 flex flex-col items-start`}
        >
            <motion.h2
                className='text-3xl font-bold text-gray-800'
                variants={itemVariants}
            >
                {t(title)}
            </motion.h2>
            <motion.ul
                className='space-y-4'
                variants={containerVariants}
                initial='hidden'
                animate={inView ? "visible" : "hidden"}
            >
                {bulletPoints?.map((point, index) => (
                    <motion.li
                        key={index}
                        className='flex items-start'
                        variants={itemVariants}
                    >
                        <span className='flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium mr-3 mt-1'>
                            {index + 1}
                        </span>
                        <div>
                            <h3 className='font-semibold text-gray-800'>
                                {t(point.title)}
                            </h3>
                            <p className='text-gray-600'>
                                {t(point.description)}
                            </p>
                        </div>
                    </motion.li>
                ))}
            </motion.ul>
            {asActionButton && (
                <Link
                    to='/download-app'
                    className='px-4 py-3 flex items-center duration-300 gap-2 bg-gray-200  text-gray-800 rounded-full text-xs lg:text-sm font-medium hover:bg-gray-300'
                >
                    <span>{actionText ? actionText : t("about.cta")}</span>
                </Link>
            )}
        </div>
    );

    const ImageSection = () => (
        <motion.div
            className={`flex-1 ${
                isImageVertical
                    ? `w-full lg:max-w-[31.25rem] rounded-md lg:h-full lg:max-h-[40rem]`
                    : `max-w-[775px]`
            }  h-auto lg:min-h-[400px] w-full  ${
                imageOnRight ? "md:order-2 order-2" : "md:order-1 order-2"
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5 }}
        >
            <div
                className={`overflow-hidden rounded-lg shadow-lg ${
                    isImageVertical ? "h-full object-cover" : "h-auto"
                }`}
            >
                <img
                    src={imageUrl}
                    alt={imageAlt}
                    className={`w-full duration-300 ${
                        isImageVertical ? "h-full object-cover" : "h-auto"
                    } rounded-lg shadow-lg hover:scale-110 transition-transform`}
                />
            </div>
        </motion.div>
    );

    return (
        <section className='lg:py-16 py-14' ref={ref}>
            <div
                className={`grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-6 items-center md:items-center`}
            >
                <ContentSection />
                <ImageSection />
            </div>
        </section>
    );
}
