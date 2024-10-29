"use client"
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

export function Nav() {
    const pathname = usePathname();

    return (
        <nav className="w-full h-12 bg-navbarColor flex items-center text-white">
            <div className="h-full flex-[3] flex items-center justify-around text-xl">
                <Link
                    href="/"
                    className={`h-full w-1/4 p-2 flex justify-center items-center ${
                        pathname === '/' ? 'bg-textColor' : 'hover:bg-textColor'
                    }`}
                >
                    Accueil
                </Link>
                <Link
                    href="/products"
                    className={`h-full w-1/4 p-2 flex justify-center items-center ${
                        pathname === '/products' ? 'bg-titleColor' : 'hover:bg-textColor'
                    }`}
                >
                    Boutique
                </Link>
                <Link
                    href="/contact"
                    className={`h-full w-1/4 p-2 flex justify-center items-center ${
                        pathname === '/contact' ? 'bg-iconColor' : 'hover:bg-buttonColor'
                    }`}
                >
                    Contact
                </Link>
                <Link
                    href="/administration"
                    className={`h-full w-1/4 p-2 flex justify-center items-center ${
                        pathname === '/administration' ? 'bg-orange-800' : 'hover:bg-titleColor'
                    }`}
                >
                    Dashboard
                </Link>
            </div>
                <div className="flex-[1] flex items-center justify-center">
                    <Link href={"/"} className={"absolute top-0 z-10"}>
                    <Image src="/logos/logo-W2C.png" alt="Logo" width={80} height={80}
                           className="bg-buttonColor  rounded-full hover:cursor-pointer  opacity-100"/>
                    </Link>
                </div>

            <div className="flex-[3] flex items-center justify-end h-full">
                <FaShoppingCart size={50} className="h-full mr-8 p-1 pl-2 pr-2  hover:bg-textColor"/>
                <FaUser size={50} className="h-full mr-8 p-1 pl-2 pr-2 hover:bg-textColor"/>
            </div>

        </nav>
    );
}
