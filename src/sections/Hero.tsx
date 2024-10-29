/** @format */
import { slide1, slideMob1 } from "../assets";
import { motion } from "framer-motion";
import AppleButton from "../components/buttons/AppleButton";
import GooglePlayButton from "../components/buttons/GooglePlayButton";
import { containerVariants, itemVariants } from "../motion/variant";
import { useTranslation } from "react-i18next";

const Hero = () => {
    const [t] = useTranslation("global");
    return (
        <section className='min-h-[680px] relative w-full font-montserrat bg-no-repeat bg-cover'>
            <div className='absolute w-full h-full right-0 top-0 bottom-0 inset-0'>
                <img
                    className='block lg:hidden w-full h-full object-cover'
                    src={slideMob1}
                    loading='lazy'
                    alt='banner mob'
                />
                <img
                    src={slide1}
                    className='hidden lg:block w-full h-full object-cover'
                    loading='lazy'
                    alt='hero desktop'
                />
            </div>
            <div className='absolute w-full h-full z-10 bg-black bg-opacity-30 right-0 top-0 bottom-0 inset-0'></div>
            <div className='max-w-6xl min-h-[680px] text-white relative z-20 mx-auto h-full flex items-center w-full px-6 lg:px-4'>
                <motion.div
                    className='flex flex-col gap-8 lg:gap-12 items-start w-full max-w-[600px]'
                    variants={containerVariants}
                    initial='hidden'
                    animate='visible'
                >
                    <motion.h1
                        className='text-2xl lg:text-3xl font-bold leading-10'
                        variants={itemVariants}
                    >
                        {t("hero.title")}
                    </motion.h1>
                    <motion.p
                        className='text-sm lg:text-base font-medium'
                        variants={itemVariants}
                    >
                        {t("hero.subtitle")}
                    </motion.p>
                    <motion.div
                        className='flex flex-row gap-3 lg:gap-6'
                        variants={itemVariants}
                    >
                        <AppleButton t={t} href='/download-app' />
                        <GooglePlayButton t={t} href='/download-app' />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
