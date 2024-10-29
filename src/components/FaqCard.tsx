/** @format */

import { FC, useState } from "react";
import { GoChevronDown } from "react-icons/go";

const FaqCard: FC<{ title: string; desc: string }> = ({ title, desc }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            className={`border border-separator p-4 w-full lg:p-5 rounded-lg max-w-3xl mx-auto flex flex-col gap-4`}
        >
            <div
                onClick={() => setIsOpen(!isOpen)}
                className='flex justify-between items-center cursor-pointer'
            >
                <h1 className='text-lg font-bold'>{title}</h1>
                <GoChevronDown
                    className={`${isOpen ? "rotate-180" : "rotation-0"}`}
                    size={20}
                />
            </div>
            <p className={`${isOpen ? "block" : "hidden"} text-sm`}>{desc}</p>
        </div>
    );
};

export default FaqCard;
