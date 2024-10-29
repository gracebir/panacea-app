/** @format */

import { FC } from "react";

type buttonProp = {
    variant: "default" | "action";
    text: string;
    href: string;
};

const Button: FC<buttonProp> = ({ href, text, variant = "default" }) => {
    return (
        <a
            href={href}
            target='_blank'
            className={`${
                variant === "default"
                    ? "bg-white hover:bg-gray-100 "
                    : "bg-gray-900 text-white hover:bg-gray-800"
            } px-4 rounded-3xl lg:text-sm text-xs flex items-center font-semibold duration-300`}
        >
            <span>{text}</span>
        </a>
    );
};

export default Button;
