/** @format */

import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { TFunction } from "i18next";

interface QrCodeModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    url: string;
    t: TFunction<"glodal", undefined>;
}

const QrCodeModal: React.FC<QrCodeModalProps> = ({
    isOpen,
    setIsOpen,
    url,
    t,
}) => {
    const closeModal = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, closeModal]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className='fixed inset-0 top-0 bottom-0 right-0 left-0 h-svh w-full z-[9999] flex items-center justify-center px-4 lg:px-2'>
                    <motion.div
                        className='bg-white rounded-lg shadow-xl max-w-sm w-full relative '
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        <button
                            className='absolute top-2 right-2 text-gray-400 hover:text-gray-600'
                            onClick={closeModal}
                            aria-label='Close'
                        >
                            <X className='w-6 h-6' />
                        </button>
                        <div className='p-6'>
                            <h2 className='text-base lg:text-lg font-bold mb-4 font-montserrat'>
                                {t("modal.title")}
                            </h2>
                            <p className='text-gray-600 text-xs lg:text-sm mb-6 font-montserrat'>
                                {t("modal.text")}
                            </p>
                            <div className='flex justify-center mb-6'>
                                <QRCodeSVG
                                    value={url}
                                    size={200}
                                    bgColor='#ffffff'
                                    fgColor='#000000'
                                    level='L'
                                    includeMargin={false}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default QrCodeModal;
