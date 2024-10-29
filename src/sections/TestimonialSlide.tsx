/** @format */

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
// Make sure to import the CSS for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "../components/TestimonialCard";
import { useTranslation } from "react-i18next";

export interface TestimonialProps {
    desc: string;
    names: string;
    position: string;
}

interface TestimonialsProps {
    title: string;
    content: TestimonialProps[];
    isRevert?: boolean;
    imgUrl: string;
}

export default function TestimonialSlide({
    title,
    content,
    isRevert = false,
    imgUrl,
}: TestimonialsProps) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [t] = useTranslation("global");

    const sliderRef = useRef<Slider>(null);

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const nextSlide = () => {
        sliderRef.current?.slickNext();
    };

    const prevSlide = () => {
        sliderRef.current?.slickPrev();
    };

    return (
        <section
            className='flex flex-col w-full gap-10 slider-container'
            ref={ref}
        >
            <div
                className={`w-full flex  ${
                    isRevert ? "flex-row-reverse" : "flex-row"
                } justify-between items-center gap-4`}
            >
                <motion.h1
                    className='text-xl lg:text-3xl font-bold lg:max-w-md max-w-xs w-full lg:leading-10 leading-6'
                    initial={{ opacity: 0, y: -20 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
                    }
                    transition={{ duration: 0.5 }}
                >
                    {title}
                </motion.h1>
                <div className='flex gap-2'>
                    <button
                        onClick={prevSlide}
                        className='p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors'
                        aria-label='Previous testimonial'
                    >
                        <ChevronLeft className='w-6 h-6' />
                    </button>
                    <button
                        onClick={nextSlide}
                        className='p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors'
                        aria-label='Next testimonial'
                    >
                        <ChevronRight className='w-6 h-6' />
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div
                    className={`${
                        isRevert ? "order-2" : "order-1"
                    } py-5 max-h-[286px]`}
                >
                    <div
                        className={`h-full md:w-[80%] w-full ${
                            isRevert ? "float-end" : "float-start"
                        } `}
                    >
                        <img
                            className='w-full h-full object-cover rounded-md'
                            src={imgUrl}
                            alt={title}
                        />
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`${isRevert ? "order-1" : "order-1"}`}
                >
                    <Slider ref={sliderRef} {...settings}>
                        {content.map((item, index) => (
                            <div key={`${item.desc}-${index}`} className='px-2'>
                                <TestimonialCard
                                    names={t(item.names)}
                                    desc={t(item.desc)}
                                />
                            </div>
                        ))}
                    </Slider>
                </motion.div>
            </div>
        </section>
    );
}
