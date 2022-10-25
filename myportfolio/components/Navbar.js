import Link from "next/link";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { useTheme } from "next-themes";
import Button from "../components/Button";
import { useState, useEffect } from 'react'

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigation = [
    { id:1, label: "Home", path: "/" },
    { id:2, label: "Projects", path: "/projects" },
    { id:3, label: "Articles", path: "/articles" },
    { id:4, label: "About", path: "/about" },
  ];

  const renderDarkModeToggle = () => {

    if(!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <Button
          className="bg-gray-200 dark:bg-gray-700 justify-end"
          onClick={() => setTheme('light')}
        >
          <HiOutlineSun />
        </Button>
      );
    } else {
      return (
        <Button className="bg-gray-200 justify-end" onClick={() => setTheme('dark')}>
          <HiOutlineMoon />
        </Button>
      );
    }
  };

  return (
    <div className="mt-6 flex items-center justify-evenly">
      <ul className="flex gap-4">
        {navigation.map((nav) => (
          <Link key={nav.id} href={nav.path}>
            <a className="text-2xl text-stone-700 hover:text-stone-900 dark:text-stone-200 dark:hover:text-stone-400 antialised font-BebasNeue">
              {nav.label}
            </a>
          </Link>
        ))}
      </ul>
      {renderDarkModeToggle()}
    </div>
  );
};

export default Navbar;
