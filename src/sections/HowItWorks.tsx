/** @format */
import { TFunction } from "i18next";
import { howWork1, howWork2 } from "../assets";
import ServiceSection, { BulletPoint } from "../components/ServiceSection";
import { howItWorksSection } from "../utils/constant";

function HowItWorks({ t }: { t?: TFunction<"global", undefined> }) {
    return (
        <section>
            <ServiceSection
                title={"howItWorksSection.section1.title"}
                bulletPoints={
                    t!("howItWorksSection.section1.content", {
                        returnObjects: true,
                    }) as BulletPoint[]
                }
                imageUrl={howWork1}
                imageAlt={howItWorksSection.section1.title}
                imageOnRight={true}
            />
            <ServiceSection
                title={"howItWorksSection.section2.title"}
                bulletPoints={
                    t!("howItWorksSection.section2.content", {
                        returnObjects: true,
                    }) as BulletPoint[]
                }
                imageUrl={howWork2}
                imageAlt={howItWorksSection.section2.title}
                imageOnRight={false}
                asActionButton={true}
                actionText={t!("cta.download")}
            />
        </section>
    );
}

export default HowItWorks;
