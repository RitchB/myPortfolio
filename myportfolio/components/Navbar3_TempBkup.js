import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Button from "./Button";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { FaWindowClose } from "react-icons/fa";
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar3 = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderDarkModeToggle = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <Button
          className="bg-stone-200 text-cardsboxred justify-end"
          onClick={() => setTheme("light")}
        >
          <HiOutlineSun />
        </Button>
      );
    } else {
      return (
        <Button
          className="bg-cardsboxblue text-stone-200 justify-end"
          onClick={() => setTheme("dark")}
        >
          <HiOutlineMoon />
        </Button>
      );
    }
  };

  return (
    <nav>
      <div className="mt-8 flex justify-between">
        <div className="flex gap-8">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <a className="items-center text-2xl text-stone-600 hover:text-stone-900 dark:text-stone-200 dark:hover:text-stone-400 antialised font-OverTheRainbow">
                Richard Beauregard
              </a>
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="/projects"
              className="text-2xl text-stone-600 hover:text-stone-900 dark:text-stone-200 dark:hover:text-stone-400 antialised font-BebasNeue"
            >
              Projects
            </a>
            <a
              href="/posts"
              className="text-2xl text-stone-600 hover:text-stone-900 dark:text-stone-200 dark:hover:text-stone-400 antialised font-BebasNeue"
            >
              Blog
            </a>
            <a
              href="/about"
              className="text-2xl text-stone-600 hover:text-stone-900 dark:text-stone-200 dark:hover:text-stone-400 antialised font-BebasNeue"
            >
              About me
            </a>
          </div>
        </div>
        <div className="hidden lg:flex flex items-center space-x-1">
          {renderDarkModeToggle()}
        </div>
        {/*mobile button goes here*/}
        <div className="lg:hidden flex items-center">
          <Button
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            className="text-2xl text-stone-600 hover:text-stone-900 dark:text-stone-200 dark:hover:text-stone-400"
          >
            {isMenuToggled ? <FaWindowClose /> : <GiHamburgerMenu />}
          </Button>
        </div>
      </div>
      <div
        className={`${
          !isMenuToggled ? "hidden" : "pt-2 flex flex-col lg:hidden"
        }`}
      >
        <a
          href="/projects"
          className="block py-1 px-1 text-xl text-stone-600 hover:text-stone-900 dark:text-stone-200 dark:hover:text-stone-400 antialised font-BebasNeue"
        >
          Projetcs
        </a>
        <a
          href="/posts"
          className="block py-1 px-1 text-xl text-stone-600 hover:text-stone-900 dark:text-stone-200 dark:hover:text-stone-400 antialised font-BebasNeue"
        >
          Blog
        </a>
        <a
          href="/about"
          className="block py-1 px-1 text-xl text-stone-600 hover:text-stone-900 dark:text-stone-200 dark:hover:text-stone-400 antialised font-BebasNeue"
        >
          About me
        </a>
      </div>
    </nav>
  );
};

export default Navbar3;
