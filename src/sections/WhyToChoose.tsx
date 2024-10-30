/** @format */

import { useInView } from "react-intersection-observer";

import ServiceSection, { BulletPoint } from "../components/ServiceSection";
import { TFunction } from "i18next";
import { happy, happy1 } from "../assets";
import { services } from "../utils/constant";

function WhyToChoose({ t }: { t?: TFunction<"global", undefined> }) {
    const [ref] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (
        <section ref={ref} className='flex flex-col gap-10 lg:gap-12'>
            <ServiceSection
                title={"services.section1.title"}
                bulletPoints={
                    t!("services.section1.content", {
                        returnObjects: true,
                    }) as BulletPoint[]
                }
                imageUrl={happy1}
                imageAlt={"services.section1.title"}
                isImageVertical={true}
                imageOnRight={true}
            />
            <ServiceSection
                title={"services.section2.title"}
                bulletPoints={
                    t!("services.section2.content", {
                        returnObjects: true,
                    }) as BulletPoint[]
                }
                imageUrl={happy}
                imageAlt={services.section2.title}
                isImageVertical={true}
                imageOnRight={false}
                asActionButton={true}
                actionText={t!("cta.order")}
            />
        </section>
    );
}

export default WhyToChoose;
