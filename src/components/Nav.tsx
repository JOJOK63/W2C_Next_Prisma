"use client"
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

export function Nav() {
    const pathname = usePathname();

    return (
        <nav className="w-full h-12 bg-brownbase flex items-center text-white">
            <div className="h-full flex-[3] flex items-center justify-around text-xl">
                <Link
                    href="/"
                    className={`h-full p-2 flex justify-center items-center ${
                        pathname === '/' ? 'bg-orange-800' : 'hover:bg-orange-900'
                    }`}
                >
                    Accueil
                </Link>
                <Link
                    href="/products"
                    className={`h-full p-2 flex justify-center items-center ${
                        pathname === '/products' ? 'bg-orange-800' : 'hover:bg-orange-900'
                    }`}
                >
                    Boutique
                </Link>
                <Link
                    href="/contact"
                    className={`h-full p-2 flex justify-center items-center ${
                        pathname === '/contact' ? 'bg-orange-800' : 'hover:bg-orange-900'
                    }`}
                >
                    Nous contacter
                </Link>
                <Link
                    href="/administration"
                    className={`h-full p-2 flex justify-center items-center ${
                        pathname === '/administration' ? 'bg-orange-800' : 'hover:bg-orange-900'
                    }`}
                >
                    Dashboard
                </Link>
            </div>
            <div className="flex-[1] flex items-center justify-center">
                <Image src="/logos/logo-W2C.png" alt="Logo" width={80} height={80} className="bg-brownbase absolute top-0 rounded-bl-3xl rounded-br-3xl hover:scale-105 z-10" />
            </div>
            <div className="flex-[3] flex items-center justify-end">
                <FaShoppingCart size={40} className="mr-8 p-1  hover:bg-orange-900" />
                <FaUser size={40} className="mr-8 p-1"/>
            </div>

        </nav>
    );
}
