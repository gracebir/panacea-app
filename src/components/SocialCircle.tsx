/** @format */

import React from "react";
import { IconType } from "react-icons";

const SocialCircle: React.FC<{ SocialIcon: IconType; href: string }> = ({
    SocialIcon,
    href,
}) => {
    return (
        <a
            className='p-2 rounded-full bg-gray-200 hover:bg-gray-300'
            href={href}
        >
            <SocialIcon size={18} />
        </a>
    );
};

export default SocialCircle;
