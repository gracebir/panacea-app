/** @format */

import { FC } from "react";
import { Link } from "react-router-dom";

const ButtonAction: FC<{
    Icon: any;
    UpText: string;
    DowText: string;
    href: string;
}> = ({ Icon, UpText, DowText, href }) => {
    return (
        <Link
            to={href}
            className='inline-flex items-center px-4 py-2 lg:px-6 lg:py-3 rounded-lg transform transition-all hover:scale-105 hover:shadow-md hover:animate-wiggle bg-black duration-300 text-white hover:bg-gray-800'
            aria-label='Download on the App Store'
        >
            <Icon className='w-4 lg:h-6 lg:w-6 h-4 mr-3' />
            <div className='flex flex-col'>
                <span className='text-xs whitespace-nowrap'>{UpText}</span>
                <span className='lg:text-base text-xs whitespace-nowrap font-semibold'>
                    {DowText}
                </span>
            </div>
        </Link>
    );
};

export default ButtonAction;
