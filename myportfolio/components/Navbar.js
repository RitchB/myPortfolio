import Link from "next/link";

const Navbar = () => {
  return (
      <div>
        <nav className="flex rounded-full px-3 justify-center text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-800/5 text-xl backdrop-blur antialiased font-medium font-yanoneK">
          <ul>
            <Link href="/">
              <a>Home </a>
            </Link>
            <Link href="/projects">
              <a>Projects </a>
            </Link>
            <Link href="/articles">
              <a>Articles </a>
            </Link>
            <Link href="/about">
              <a>About </a>
            </Link>
          </ul>
        </nav>
      </div>
  );
};

export default Navbar;


// rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
//         <nav className="flex justify-center text-3xl antialiased font-medium font-yanoneK">