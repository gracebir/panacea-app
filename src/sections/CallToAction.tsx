/** @format */

import { useTranslation } from "react-i18next";

import ButtonAction from "../components/ButtonAction";
import { AppleIcon } from "../components/icons/AppIcon";
import { PlayStoreIcon } from "../components/icons/GooglePlayIcon";

const CallToAction = () => {
    const [t] = useTranslation("global");
    return (
        <div className='w-full min-h-[600px] rounded-lg bg-primary grid grid-cols-1 lg:grid-cols-2 lg:justify-items-start justify-items-center'>
            <div className='flex items-center py-6 lg:py-4 w-full'>
                <div className='max-w-[240px] h-[500px] mx-auto bg-gray-200 rounded-lg w-full'>
                    {/* <img className='w-full h-full' src={action1} alt='' /> */}
                </div>
            </div>

            <div className='h-full flex items-center bore'>
                <div className='flex flex-col lg:items-start items-center lg:gap-8 gap-5  p-6 lg:p-8 text-white'>
                    <div className='flex flex-col items-center lg:items-start gap-4 lg:gap-8 max-w-sm mx-auto'>
                        <h1 className='text-2xl lg:text-3xl font-bold text-center lg:text-start'>
                            {t("cta.title")}
                        </h1>
                        <p className='text-base text-center md:text-start font-medium text-white'>
                            {t("cta.desc")}
                        </p>
                    </div>
                    <div className='flex flex-row sm:flex-row gap-4 items-center max-w-[500px] mx-auto'>
                        <ButtonAction
                            UpText={t("hero.cta.apple.text1")}
                            DowText={t("hero.cta.apple.text2")}
                            href='/download-app'
                            Icon={AppleIcon}
                        />
                        <ButtonAction
                            UpText={t("hero.cta.playstore.text1")}
                            DowText={t("hero.cta.playstore.text2")}
                            href='/download-app'
                            Icon={PlayStoreIcon}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
