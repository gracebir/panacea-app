/** @format */

import ServiceSection from "../components/ServiceSection";
import Heading from "../components/Heading";
import { useInView } from "react-intersection-observer";
import { whyChooseImage } from "../assets";

const Service = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section ref={ref} className='flex flex-col gap-10 lg:gap-12'>
            <Heading text='Services' inView={inView} />
            <ServiceSection
                title='Key Features'
                bulletPoints={[
                    {
                        title: "Instant Ordering!",
                        description:
                            "Skip the wait! Browse menus and place your order directly from your phone.",
                    },
                    {
                        title: "Easy Payments",
                        description: `Pay securely and instantly within the app. ICUPA supports various payment options, including Ecobank Xpress, our exclusive payment partner.`,
                    },
                    {
                        title: "Discover New Places",
                        description: `Find the best bars and restaurants in your area, complete with ratings, reviews, and recommendations tailored to your preferences.`,
                    },
                    {
                        title: "Digital Menus & Promotions",
                        description: `No more flipping through paper menus. Explore digital menus, and enjoy special promotions directly in the app.`,
                    },
                    {
                        title: "Real-Time Order Tracking",
                        description: `Track your orders from preparation to delivery, ensuring you know exactly when to expect your food and drinks.`,
                    },
                    {
                        title: "Tipping Made Easy",
                        description: `Show appreciation for great service by tipping directly through the app.`,
                    },
                    {
                        title: "Check-In & Reserve",
                        description: `Check-in at your favorite spots, make reservations in advance, and guarantee your spot even during peak hours.`,
                    },
                ]}
                imageUrl={whyChooseImage}
                imageAlt='Delivery person with Bolt Food bag'
                imageOnRight={true}
            />

            <ServiceSection
                title='For Business Owners'
                bulletPoints={[
                    {
                        title: "Grow Your Business with ICUPA",
                        description:
                            "Running a bar or restaurant? ICUPA makes it easier to manage operations, attract customers,and boost sales",
                    },
                    {
                        title: "Manage Orders Seamlessly",
                        description:
                            "Create and manage digital menus, and promote special offers to increase customer engagement.",
                    },
                    {
                        title: "Digital Menus & Offers",
                        description:
                            "Create and manage digital menus, and promote special offers to increase customer engagement.",
                    },
                    // usuususus
                    {
                        title: "Streamlined Payments",
                        description:
                            "ICUPA’s built-in payment system ensures fast, secure, and hassle-free transactions, with Ecobank Xpress integration.",
                    },
                    {
                        title: "Customer Insights",
                        description:
                            "Reward loyal customers and encourage repeat visits by offering promotions and loyalty points directly through the app.",
                    },
                    {
                        title: "Promotions & Loyalty Programs",
                        description:
                            "Reward loyal customers and encourage repeat visits by offering promotions and loyalty points directly through the app.",
                    },
                ]}
                imageUrl={whyChooseImage}
                imageAlt='Person using Bolt Food app on smartphone'
                imageOnRight={false}
            />
        </section>
    );
};

export default Service;
