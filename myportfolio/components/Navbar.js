import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex justify-center text-3xl antialiased font-medium font-yanoneK">
      <ul>
        <Link href="/"><a>Home </a></Link>
        <Link href="/projects"><a>Projects </a></Link>
        <Link href="/articles"><a>Articles </a></Link>
        <Link href="/about"><a>About </a></Link>
      </ul>
    </nav>
  );
};

export default Navbar;