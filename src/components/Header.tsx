/** @format */

import { useState, useEffect, FC, useRef } from "react";
// import { logo } from "../assets";
import { Link } from "react-router-dom";
import { GoGlobe } from "react-icons/go";
import { LucideChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
];

const Header: FC<{ isBgwhite?: boolean }> = ({ isBgwhite = false }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [currentLang, setCurrentLang] = useState(languages[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [t, i18n] = useTranslation("global");

    useEffect(() => {
        const locLang =
            localStorage.getItem("lang") || navigator.language.slice(0, 2);
        const lang =
            languages.find((lang) => lang.code === locLang) || languages[0];
        i18n.changeLanguage(lang.code);
        document.documentElement.lang = lang.code;
        setCurrentLang(lang);
    }, [currentLang.code, i18n]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const selectLanguage = (lang: (typeof languages)[0]) => {
        localStorage.setItem("lang", lang.code);
        setCurrentLang(lang);
        setIsDropdownOpen(false);
        document.documentElement.lang = lang.code;
        window.location.reload();
    };

    return (
        <header
            className={`h-14 w-full flex items-center font-montserrat transition-colors fixed right-0 top-0 left-0 z-50 duration-300 ${
                isScrolled
                    ? "bg-primary"
                    : `${
                          isBgwhite
                              ? "bg-primary shadow shadow-gray-100"
                              : "bg-transparent"
                      }`
            }`}
        >
            <nav className='max-w-6xl w-full px-6 flex justify-between lg:px-4 mx-auto'>
                <Link to='/'>
                    <h3 className='text-xl lg:text-2xl font-extrabold text-yellow-400'>
                        PANACEAN
                    </h3>
                    {/* <img className='h-10' src={logo} alt='logo' /> */}
                </Link>
                <div className='flex gap-6 items-center lg:gap-8'>
                    <div
                        id='google_translate_element'
                        className={`relative text-white`}
                        ref={dropdownRef}
                    >
                        <button
                            className='flex items-center gap-3'
                            onClick={toggleDropdown}
                            aria-haspopup='true'
                            aria-expanded={isDropdownOpen}
                        >
                            <GoGlobe />
                            <span className='text-sm font-bold'>
                                {currentLang.code.toUpperCase()}
                            </span>
                            <LucideChevronDown
                                className={`transform transition-transform duration-200 ${
                                    isDropdownOpen ? "rotate-180" : ""
                                }`}
                            />
                        </button>
                        {isDropdownOpen && (
                            <div className='absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                <div className='py-1'>
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            className={`block w-full text-left px-4 py-2 text-sm text-gray-700 ${
                                                currentLang.code ===
                                                    lang.code &&
                                                "bg-primary text-white"
                                            } hover:bg-primary hover:text-white`}
                                            onClick={() => selectLanguage(lang)}
                                        >
                                            {lang.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <Link
                        className={`
              ${
                  isScrolled
                      ? "bg-white lg:bg-gray-100"
                      : isBgwhite
                      ? "bg-gray-200 hover:bg-gray-100"
                      : "bg-white hover:bg-gray-100"
              }
              px-4 rounded-3xl py-2 lg:text-sm text-xs flex items-center font-semibold
              duration-300 transform transition-all
              hover:scale-105 hover:shadow-md
              hover:animate-wiggle
            `}
                        to='/download-app'
                    >
                        {t("header.action")}
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
