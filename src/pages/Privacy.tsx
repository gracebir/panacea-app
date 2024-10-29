/** @format */
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const PrivacyPolicy: React.FC = () => {
    const [t] = useTranslation("global");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
            },
        },
    };

    return (
        <div className='max-w-6xl min-h-screen mx-auto px-6 lg:px-4 py-[5rem] font-montserrat'>
            <motion.div
                className='text-gray-800 max-w-4xl text-sm lg:text-base'
                initial='hidden'
                animate='visible'
                variants={containerVariants}
            >
                <motion.h1
                    className='text-2xl lg:text-3xl font-bold mb-8'
                    variants={itemVariants}
                >
                    {t("privacyPolicy.title")}
                </motion.h1>
                <motion.p
                    className='mb-4 font-medium text-sm'
                    variants={itemVariants}
                >
                    {t("privacyPolicy.lastUpdated")}
                </motion.p>

                {/* Introduction Section */}
                <motion.section variants={itemVariants}>
                    <h2 className='lg:text-xl text-lg font-bold mb-4'>
                        {t("privacyPolicy.sections.introduction.heading")}
                    </h2>
                    <p className='mb-4'>
                        {t("privacyPolicy.sections.introduction.content")}
                    </p>
                </motion.section>

                {/* Privacy Principles Section */}
                <motion.section variants={itemVariants}>
                    <h2 className='lg:text-xl text-lg font-bold mb-4'>
                        {t("privacyPolicy.sections.privacyPrinciples.heading")}
                    </h2>
                    <ul className='list-disc pl-6 mb-4'>
                        {Array.isArray(
                            t(
                                "privacyPolicy.sections.privacyPrinciples.content",
                                {
                                    returnObjects: true,
                                }
                            )
                        )
                            ? (
                                  t(
                                      "privacyPolicy.sections.privacyPrinciples.content",
                                      {
                                          returnObjects: true,
                                      }
                                  ) as Array<string | { list: string[] }>
                              ).map((item, index) =>
                                  typeof item === "string" ? (
                                      <li key={index}>{item}</li>
                                  ) : (
                                      <ul className='list-disc pl-6'>
                                          {item.list.map(
                                              (subItem, subIndex) => (
                                                  <li
                                                      key={subIndex}
                                                      className=''
                                                  >
                                                      {subItem}
                                                  </li>
                                              )
                                          )}
                                      </ul>
                                  )
                              )
                            : null}
                    </ul>
                </motion.section>

                {/* Data Collection Section */}
                <motion.section variants={itemVariants}>
                    <h2 className='lg:text-xl text-lg font-bold mb-4'>
                        {t("privacyPolicy.sections.dataCollection.heading")}
                    </h2>
                    <ul className='mb-4'>
                        {(
                            t("privacyPolicy.sections.dataCollection.content", {
                                returnObjects: true,
                            }) as Array<{ item: string }>
                        ).map((item) => (
                            <li className='list-none' key={item.item}>
                                <span className='font-medium'>
                                    {item.item.split(" ")[0]}{" "}
                                </span>
                                {item.item
                                    .split(" ")
                                    .slice(1, item.item.split(" ").length)
                                    .join(" ")}
                            </li>
                        ))}
                    </ul>
                </motion.section>

                {/* Data Usage Section */}
                <motion.section variants={itemVariants}>
                    <h2 className='lg:text-xl text-lg font-bold mb-4'>
                        {t("privacyPolicy.sections.usageOfData.heading")}
                    </h2>
                    <ul className='mb-4'>
                        {(
                            t("privacyPolicy.sections.usageOfData.content", {
                                returnObjects: true,
                            }) as Array<{
                                item: string;
                                subList: Array<string>;
                            }>
                        ).map((item, i) => (
                            <li className='list-none' key={`${item.item}-${i}`}>
                                <span className='font-medium'>
                                    {item.item.split(" ")[0]}
                                </span>
                                {item.item
                                    .split(" ")
                                    .slice(1, item.item.split(" ").length)
                                    .join(" ")}
                                <ul className='list-disc pl-6'>
                                    {item.subList?.length > 0 &&
                                        item.subList.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </motion.section>

                {/* Legal basis for the data */}
                <motion.section variants={itemVariants}>
                    <h2 className='lg:text-xl text-lg font-bold mb-4'>
                        {t("privacyPolicy.sections.legalBasis.heading")}
                    </h2>
                    <p className='mb-2'>
                        {t("privacyPolicy.sections.legalBasis.content.title")}
                    </p>
                    <ul className='mb-4 list-disc pl-6'>
                        {(
                            t(
                                "privacyPolicy.sections.legalBasis.content.list",
                                {
                                    returnObjects: true,
                                }
                            ) as Array<string>
                        ).map((item) => (
                            <li key={item}>
                                <span className='font-medium'>
                                    {item.split(" ")[0]}
                                </span>{" "}
                                {item
                                    .split(" ")
                                    .slice(1, item.split(" ").length)
                                    .join(" ")}
                            </li>
                        ))}
                    </ul>
                </motion.section>

                {/* Data Sharing  */}
                <motion.section variants={itemVariants}>
                    <h2 className='lg:text-xl text-lg font-bold mb-4'>
                        {t("privacyPolicy.sections.dataSecurity.heading")}
                    </h2>
                    <ul className='mb-4'>
                        {(
                            t("privacyPolicy.sections.dataSecurity.content", {
                                returnObjects: true,
                            }) as Array<{ item: string }>
                        ).map((item) => (
                            <li key={item.item}>{item.item}</li>
                        ))}
                    </ul>
                </motion.section>

                {/* Data Sharing Section */}
                <motion.section variants={itemVariants}>
                    <h2 className='lg:text-xl text-lg font-bold mb-4'>
                        {t("privacyPolicy.sections.dataSharing.heading")}
                    </h2>
                    <ul className='mb-4'>
                        {(
                            t("privacyPolicy.sections.dataSharing.content", {
                                returnObjects: true,
                            }) as Array<{ item: string }>
                        ).map((item) => (
                            <li className='space-y-1' key={item.item}>
                                <span className='font-medium'>
                                    {item.item.split(" ")[0]}{" "}
                                </span>
                                {item.item
                                    .split(" ")
                                    .slice(1, item.item.split(" ").length)
                                    .join(" ")}
                            </li>
                        ))}
                    </ul>
                </motion.section>

                {/* data Rights Section */}
                <motion.section variants={itemVariants}>
                    <h2 className='lg:text-xl text-lg font-bold mb-4'>
                        {t("privacyPolicy.sections.dataRights.heading")}
                    </h2>
                    <ul className='mb-4'>
                        {(
                            t("privacyPolicy.sections.dataRights.content", {
                                returnObjects: true,
                            }) as Array<{ item: string }>
                        ).map((item) => (
                            <li className='space-y-1' key={item.item}>
                                <span className='font-medium'>
                                    {item.item.split(" ")[0]}{" "}
                                </span>
                                {item.item
                                    .split(" ")
                                    .slice(1, item.item.split(" ").length)
                                    .join(" ")}
                            </li>
                        ))}
                    </ul>
                </motion.section>

                {/* Protect minor */}
                <motion.section variants={itemVariants}>
                    <h2 className='lg:text-xl text-lg font-bold mb-4'>
                        {t("privacyPolicy.sections.protectingMinors.heading")}
                    </h2>
                    <p className='mb-4'>
                        {t("privacyPolicy.sections.protectingMinors.content")}
                    </p>
                </motion.section>

                {/* Contact Information Section */}
                <motion.section variants={itemVariants}>
                    <h2 className='lg:text-xl text-lg font-bold mb-4'>
                        {t("privacyPolicy.sections.contactAndUpdates.heading")}
                    </h2>
                    <p className='mb-4'>
                        {t(
                            "privacyPolicy.sections.contactAndUpdates.content.email"
                        )}
                    </p>
                    <p className='mb-4 font-semibold'>
                        {t(
                            "privacyPolicy.sections.contactAndUpdates.content.note"
                        )}
                    </p>
                </motion.section>
            </motion.div>
        </div>
    );
};

export default PrivacyPolicy;
