/** @format */

import { FC } from "react";
import { PlayStoreIcon } from "../icons/GooglePlayIcon";
import { Link } from "react-router-dom";
import { TFunction } from "i18next";

const GooglePlayButton: FC<{
    href: string;
    t?: TFunction<"global", undefined>;
}> = ({ href, t }) => {
    return (
        <Link
            to={href}
            className='inline-flex items-center duration-300 transform transition-all hover:scale-105 hover:shadow-md hover:animate-wiggle lg:px-6 lg:py-3 px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800'
            aria-label='Get it on Google Play'
        >
            <PlayStoreIcon className='w-4 lg:h-6 lg:w-6 h-4 mr-3' />
            <div className='flex flex-col'>
                <span className='text-xs'>
                    {t!("hero.cta.playstore.text1")}
                </span>
                <span className='text-sm lg:text-base font-semibold whitespace-nowrap'>
                    {t!("hero.cta.playstore.text2")}
                </span>
            </div>
        </Link>
    );
};

export default GooglePlayButton;
