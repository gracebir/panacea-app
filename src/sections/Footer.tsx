/** @format */

import SocialCircle from "../components/SocialCircle";
import { FaFacebook, FaSquareInstagram, FaTiktok } from "react-icons/fa6";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { pathname } = useLocation();
    const [t] = useTranslation("global");
    const isActive = (name: string) => pathname.includes(name);
    return (
        <footer className='w-full py-6 bg-white flex font-montserrat flex-col items-center lg:items-start gap-4 max-w-6xl mx-auto px-4 lg:px-4'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
                <div className='flex space-x-4 mb-4 md:mb-0'>
                    <SocialCircle
                        href='https://www.facebook.com/share/xKLEi3X9kZj17P6s/?mibextid=LQQJ4d'
                        SocialIcon={FaFacebook}
                    />
                    <SocialCircle
                        href='https://www.instagram.com/icupa.app/profilecard/?igsh=ejJiOGhqZ3VrcnMy'
                        SocialIcon={FaSquareInstagram}
                    />
                    <SocialCircle
                        href=' https://www.tiktok.com/@show_togo?_t=8qOkkqscBZl&_r=1'
                        SocialIcon={FaTiktok}
                    />
                </div>
                <div className='flex space-x-4 mb-4 md:mb-0'>
                    <a
                        href='https://apps.apple.com/rw/app/icupa/id6477151485'
                        className='px-4 py-2 flex items-center gap-2 bg-gray-200  text-gray-800 rounded-full text-xs lg:text-sm font-medium hover:bg-gray-300'
                    >
                        <FaApple size={20} />
                        <span>{t("footer.apple")}</span>
                    </a>
                    <a
                        href='https://play.google.com/store/apps/details?id=com.emateli.app&pcampaignid=web_share'
                        className='px-4 py-2 flex items-center gap-2 bg-gray-200 text-gray-800 rounded-full text-xs lg:text-sm font-medium hover:bg-gray-300'
                    >
                        <FaGooglePlay size={20} />
                        <span>{t("footer.playstore")}</span>
                    </a>
                </div>
            </div>
            <hr className='w-full' />
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600'>
                <p>© 2024 PANACEA</p>
                <div className='flex flex-wrap justify-center md:justify-end space-x-4 mt-4 md:mt-0'>
                    {/* <a href='#' className='hover:underline'>
                        FAQ
                    </a> */}
                    <Link
                        to='/term-condition'
                        className={`hover:underline ${
                            isActive("term-condition") && "underline"
                        }`}
                    >
                        {t("footer.term")}
                    </Link>
                    <Link
                        to='/privacy-policy'
                        className={`hover:underline ${
                            isActive("privacy-policy") && "underline"
                        }`}
                    >
                        {t("footer.privacy")}
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
