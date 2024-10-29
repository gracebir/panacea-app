/** @format */

import { FC } from "react";

const TestimonialCard: FC<{
    desc: string;
    names: string;
}> = ({ desc, names }) => {
    const nameSplitted = names.split(" ");
    return (
        <div className='bg-white shadow-md hover:-translate-y-2 duration-300 transition-transform min-h-[150px] my-4 rounded-lg p-8 flex flex-col gap-6'>
            <div>
                <span className='text-sm'>{desc}</span>
            </div>
            <div className='flex gap-4 items-center'>
                <img
                    className='h-10 w-10 rounded-full'
                    src={`https://avatar.iran.liara.run/username?username=${
                        nameSplitted[0] + nameSplitted[1]
                    }`}
                    alt='avatar'
                />
                <p className='text-sm'>
                    <strong>{names}</strong>
                </p>
            </div>
        </div>
    );
};

export default TestimonialCard;
