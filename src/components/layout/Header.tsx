import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="relative flex items-center py-6 ">
      <Link href="/" className="ml-10 flex items-center gap-2">
        <Image
          src="/my-logo.png"
          alt="Kseniia Konovalova logo"
          width={100}
          height={100}
          priority
        />
      </Link>
      <ul className="absolute left-1/2 -translate-x-1/2 flex gap-6">
        <li>
          <Link href="/" className="hover:text-gray-600">
            HOME
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-600">
            ABOUT
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-gray-600">
            PROJECTS
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-600">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
