/** @format */

import { useState } from "react";
import { motion } from "framer-motion";
import { AppleIcon } from "../components/icons/AppIcon";
// import GooglePlayButton from "../components/buttons/GooglePlayButton";
import QrCodeModal from "../components/modal/QrCodeModal";
import { illustractionApp, illustractionApp1 } from "../assets";
import { PlayStoreIcon } from "../components/icons/GooglePlayIcon";
import { useTranslation } from "react-i18next";

function Actions() {
    const [isOpen, setIsOpen] = useState(false);
    const [url, setUrl] = useState("");
    const [t] = useTranslation("global");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const imageVariants = {
        hidden: { x: "-100%", opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
            },
        },
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2,
                duration: 0.5,
            },
        },
    };

    return (
        <motion.div
            className='max-w-6xl mx-auto font-montserrat  py-8 lg:py-0 lg:min-h-[100svh] min-h-[60svh] flex items-center'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
        >
            <div className='w-full min-h-[300px] bg-primary lg:rounded-lg rounded-b-lg grid grid-cols-1 lg:grid-cols-2 justify-items-center'>
                <div className='min-h-[300px] py-14 px-8 bg-primary lg:px-10 lg:py-8 flex-col lg:flex-row flex gap-4'>
                    <motion.div
                        className='max-w-[15rem] h-full min-h-[300px]   lg:block hidden overflow-hidden my-auto'
                        variants={imageVariants}
                    >
                        <img
                            src={illustractionApp}
                            alt='App preview'
                            loading='lazy'
                            className='w-full h-full object-cover'
                        />
                    </motion.div>
                    <motion.div
                        className='max-w-[15rem] overflow-hidden my-auto'
                        variants={imageVariants}
                    >
                        <img
                            src={illustractionApp1}
                            alt='App preview1'
                            loading='lazy'
                            className='w-full h-full object-cover'
                        />
                    </motion.div>
                </div>
                <motion.div
                    className='h-full flex items-center '
                    variants={contentVariants}
                >
                    <div className='flex flex-col lg:items-start items-center lg:gap-8 gap-6 p-6 lg:p-8 text-white'>
                        <div className='flex flex-col items-center lg:items-start gap-4 lg:gap-8 max-w-sm mx-auto'>
                            <h1 className='text-2xl lg:text-3xl font-bold text-center lg:text-start'>
                                {t("cta.title")}
                            </h1>
                            <p className='text-base text-center md:text-start font-medium text-white'>
                                {t("cta.desc")}
                            </p>
                        </div>

                        {/* mobile view */}
                        <div className='flex lg:hidden flex-row sm:flex-row gap-4 items-center max-w-[500px] mx-auto'>
                            <a
                                href='https://apps.apple.com/rw/app/icupa/id6477151485'
                                target='_blank'
                                className='inline-flex items-center px-4 py-2 lg:px-6 lg:py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors'
                                aria-label='Download on the App Store'
                            >
                                <AppleIcon className='w-4 lg:h-6 lg:w-6 h-4 mr-3' />
                                <div className='flex flex-col'>
                                    <span className='text-xs'>
                                        {t("hero.cta.apple.text1")}
                                    </span>
                                    <span className='lg:text-base text-sm font-semibold'>
                                        {t("hero.cta.apple.text2")}
                                    </span>
                                </div>
                            </a>
                            <a
                                href={
                                    "https://play.google.com/store/apps/details?id=com.emateli.app&pcampaignid=web_share"
                                }
                                target='_blank'
                                className='inline-flex items-center px-4 py-2 lg:px-6 lg:py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors'
                                aria-label='Get it on Google Play'
                            >
                                <PlayStoreIcon className='w-4 lg:h-6 lg:w-6 h-4 mr-3' />
                                <div className='flex flex-col'>
                                    <span className='text-xs'>
                                        {t("hero.cta.playstore.text1")}
                                    </span>
                                    <span className='text-sm lg:text-base font-semibold'>
                                        {t("hero.cta.playstore.text2")}
                                    </span>
                                </div>
                            </a>
                        </div>
                        {/* desk top view */}
                        <div className='hidden lg:flex flex-row sm:flex-row gap-4 items-center max-w-[500px] mx-auto'>
                            <button
                                onClick={() => {
                                    setUrl(
                                        "https://apps.apple.com/rw/app/icupa/id6477151485"
                                    );
                                    setIsOpen(true);
                                }}
                                className='inline-flex items-center transform transition-all hover:scale-105 hover:shadow-md hover:animate-wiggle px-4 py-2 lg:px-6 lg:py-3 rounded-lg bg-black text-white hover:bg-gray-800 duration-300'
                                aria-label='Download on the App Store'
                            >
                                <AppleIcon className='w-4 lg:h-6 lg:w-6 h-4 mr-3' />
                                <div className='flex flex-col'>
                                    <span className='text-xs'>
                                        {t("hero.cta.apple.text1")}
                                    </span>
                                    <span className='lg:text-base text-sm font-semibold'>
                                        {t("hero.cta.apple.text2")}
                                    </span>
                                </div>
                            </button>
                            <button
                                onClick={() => {
                                    setUrl(
                                        "https://play.google.com/store/apps/details?id=com.emateli.app&pcampaignid=web_share"
                                    );
                                    setIsOpen(true);
                                }}
                                className='inline-flex items-center transform transition-all hover:scale-105 hover:shadow-md hover:animate-wiggle px-4 py-2 lg:px-6 lg:py-3 rounded-lg bg-black text-white hover:bg-gray-800 duration-300'
                                aria-label='Get it on Google Play'
                            >
                                <PlayStoreIcon className='w-4 lg:h-6 lg:w-6 h-4 mr-3' />
                                <div className='flex flex-col'>
                                    <span className='text-xs'>
                                        {t("hero.cta.playstore.text1")}
                                    </span>
                                    <span className='text-sm lg:text-base font-semibold'>
                                        {t("hero.cta.playstore.text2")}
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
            <QrCodeModal
                t={t}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                url={url}
            />
        </motion.div>
    );
}

export default Actions;
