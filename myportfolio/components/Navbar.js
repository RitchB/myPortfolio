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
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Articles", path: "/articles" },
    { label: "About", path: "/about" },
  ];

  const renderDarkModeToggle = () => {

    if(!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <Button
          className="bg-gray-200 dark:bg-gray-600"
          onClick={() => setTheme('light')}
        >
          <HiOutlineSun />
        </Button>
      );
    } else {
      return (
        <Button className="bg-gray-200" onClick={() => setTheme('dark')}>
          <HiOutlineMoon />
        </Button>
      );
    }
  };

  return (
    <div className="h-16 flex items-center justify-between">
      <ul className="flex gap-4">
        {navigation.map((nav) => (
          <Link href={nav.path}>
            <a className="font-medium text-xl text-gray-600 hover:text-gray-800 antialised font-yanoneK">
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

// rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
//         <nav className="flex justify-center text-3xl antialiased font-medium font-yanoneK">

//<button
//type="button"
//className="inline-flex items-center rounded border border-transparent bg-gray-300 px-2.5 py-1.5 text-xs font-medium text-black shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//>
//<HiOutlineMoon />
//</button>

//{
//  currentTheme === "dark" ? <button>dark</button> : <button>white</button>;
//}
