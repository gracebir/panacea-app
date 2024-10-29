/** @format */

import { FC } from "react";
import { useTranslation } from "react-i18next";

/** @format */
type actionButtonProps = {
    variant: "default" | "green";
    text: string;
    onClick?: () => void;
};

const ActionButton: FC<actionButtonProps> = ({ variant, text, onClick }) => {
    const [t] = useTranslation("global");
    return (
        <button
            onClick={onClick}
            className={`${
                variant === "default"
                    ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    : "bg-primary text-white"
            } font-bold text-base py-2 px-5 rounded-3xl font-montserrat`}
        >
            {t(text)}
        </button>
    );
};

export default ActionButton;
