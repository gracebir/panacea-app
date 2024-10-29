/** @format */

import { useInView } from "react-intersection-observer";
import Heading from "../components/Heading";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contactus = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [t] = useTranslation("global");
    return (
        <section
            ref={ref}
            className='flex flex-col items-center gap-10 lg:gap-12 my-8 lg:my-10'
        >
            <Heading text={t("contact.title")} inView={inView} />
            <div className='text-center'>
                {t("contact.desc")}
                {/* <p>
                    Contact our support team at{" "}
                    <strong>support@icupa.com</strong> or visit our FAQ page for
                    more information.
                </p> */}
            </div>
            <a
                href={"https://wa.me/35677186193"}
                target='_blank'
                className={`bg-gray-200 hover:bg-gray-100
                        px-4 rounded-3xl lg:text-base text-sm lg:px-6 py-2 lg:py-3 flex gap-2 lg:gap-3 items-center font-semibold duration-300`}
            >
                <FaWhatsapp size={22} className='text-primary' />{" "}
                <span>Support</span>
            </a>
        </section>
    );
};

export default Contactus;
