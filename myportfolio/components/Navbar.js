import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Button from "./Button";
import { Menu, Transition } from "@headlessui/react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { FaWindowClose } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

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

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

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
              href="/blog"
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
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                className="text-2xl text-stone-600 hover:text-stone-900 dark:text-stone-200 dark:hover:text-stone-400"
              >
                {isMenuToggled ? <FaWindowClose /> : <GiHamburgerMenu />}
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-cardsboxblue dark:bg-cardsboxred shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/projects"
                        className={classNames(
                          active
                            ? " px-4 py-1 block text-xl bg-stone-100 text-cardsboxblue dark:text-cardsboxred hover:text-darktwitter antialised font-BebasNeue"
                            : " px-4 py-1 block text-xl text-stone-100 antialised font-BebasNeue"
                        )}
                      >
                        Projects
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/blog"
                        className={classNames(
                          active
                            ? " px-4 py-1 block text-xl bg-stone-100 text-cardsboxblue dark:text-cardsboxred hover:text-darktwitter antialised font-BebasNeue"
                            : " px-4 py-1 block text-xl text-stone-100 antialised font-BebasNeue"
                        )}
                      >
                        Blog
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/about"
                        className={classNames(
                          active
                            ? " px-4 py-1 block text-xl bg-stone-100 text-cardsboxblue dark:text-cardsboxred hover:text-darktwitter antialised font-BebasNeue"
                            : " px-4 py-1 block text-xl text-stone-100 antialised font-BebasNeue"
                        )}
                      >
                        About me
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar3;
