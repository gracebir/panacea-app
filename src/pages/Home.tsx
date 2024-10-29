/** @format */

import { lazy } from "react";
import { bannerSeparator, shareExperience } from "../utils/constant";
import TestimonialSlide, {
    TestimonialProps,
} from "../sections/TestimonialSlide";
import { useTranslation } from "react-i18next";

/** @format */
const Hero = lazy(() => import("../sections/Hero"));
// const Service = lazy(() => import("../sections/Service"));
// const Faq = lazy(() => import("./sections/Faq"));
const CallToAction = lazy(() => import("../sections/CallToAction"));
const About = lazy(() => import("../sections/About"));
const HowItWorks = lazy(() => import("../sections/HowItWorks"));
const WhyToChoose = lazy(() => import("../sections/WhyToChoose"));
const ContactUs = lazy(() => import("../sections/Contactus"));
// const Testimonials = lazy(() => import("../sections/Testimonials"));
const Banner = lazy(() => import("../sections/Banner"));

function Home() {
    const [t] = useTranslation("global");
    return (
        <main>
            <Hero />
            <div className='max-w-6xl about-scroll mx-auto overflow-x-hidden w-full my-14 lg:my-16 font-montserrat flex flex-col gap-16 lg:gap-20 px-6 lg:px-4'>
                <About />
            </div>

            <Banner
                isRight={false}
                imgUrl={bannerSeparator.service.imageUrls}
                contentKey='banner.service.content'
            />
            <div className='max-w-6xl mx-auto overflow-x-hidden w-full mt-10 lg:mt-16 font-montserrat flex flex-col gap-16 lg:gap-20 px-6 lg:px-4'>
                <HowItWorks t={t} />
                <WhyToChoose t={t} />
            </div>
            <Banner
                isRight={true}
                imgUrl={bannerSeparator.testimonials.imageUrls}
                contentKey='banner.testimonials.content'
            />
            <div className='max-w-6xl mx-auto overflow-x-hidden w-full mt-10 lg:mt-16 font-montserrat flex flex-col gap-16 lg:gap-20 px-6 lg:px-4'>
                <TestimonialSlide
                    imgUrl={shareExperience.users.imageUrl}
                    title={t("shareExperience.users.title")}
                    content={
                        t("shareExperience.users.content", {
                            returnObjects: true,
                        }) as TestimonialProps[]
                    }
                />
                {/* <Testimonials
                    title={shareExperience.business.title}
                    content={shareExperience.business.content}
                /> */}
                <TestimonialSlide
                    isRevert={true}
                    imgUrl={shareExperience.business.imageUrl}
                    title={t("shareExperience.business.title")}
                    content={
                        t("shareExperience.business.content", {
                            returnObjects: true,
                        }) as TestimonialProps[]
                    }
                />
                <CallToAction />
                <ContactUs />
            </div>
        </main>
    );
}

export default Home;
