/** @format */

import FaqCard from "../components/FaqCard";

const Faq = () => {
    return (
        <section className='flex flex-col gap-10 lg:gap-12'>
            <h1 className='text-2xl lg:text-3xl font-bold text-center'>
                Frequently Asked Question
            </h1>
            <FaqCard
                desc={
                    "Bolt Food has a huge selection of restaurants and stores in your city. Just enter your address or turn on “location services”, and you’ll be able to see which restaurants deliver near you."
                }
                title={"How can I find delivery restaurants near me?"}
            />
        </section>
    );
};

export default Faq;
