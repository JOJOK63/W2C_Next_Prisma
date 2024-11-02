"use client"
import Link from "next/link";
import Image from "next/image";
import {FaBars, FaShoppingCart, FaTimes, FaUser} from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import {useEffect, useState} from "react";

export function Nav() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        // Bloquer le scroll lorsque le menu est ouvert
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    return (
        <nav className="w-full h-12 bg-navbarColor flex items-center text-white ">
            <div className="lg:hidden ml-5" onClick={toggleMenu}>
                {isOpen ? (
                    <FaTimes size={30} className="cursor-pointer hover:bg-textColor"/>
                ) : (
                    <FaBars size={30} className="cursor-pointer hover:bg-textColor"/>
                )}
            </div>
            {isOpen && (
                <div className="fixed w-full h-screen top-12 bg-navbarColor flex flex-col items-center justify-center space-y-8 text-2xl text-white z-10">
                    <Link href="/" onClick={toggleMenu} className={`p-4 ${pathname === '/' ? 'bg-textColor' : 'hover:bg-textColor'}`}>
                        Accueil
                    </Link>
                    <Link href="/products" onClick={toggleMenu} className={`p-4 ${pathname === '/products' ? 'bg-titleColor' : 'hover:bg-textColor'}`}>
                        Boutique
                    </Link>
                    <Link href="/contact" onClick={toggleMenu} className={`p-4 ${pathname === '/contact' ? 'bg-iconColor' : 'hover:bg-buttonColor'}`}>
                        Contact
                    </Link>
                    <Link href="/administration" onClick={toggleMenu} className={`p-4 ${pathname === '/administration' ? 'bg-orange-800' : 'hover:bg-titleColor'}`}>
                        Dashboard
                    </Link>
                </div>
            )}


            <div className="h-full flex-[3] flex items-center justify-around text-xl hidden lg:flex text-base">
                <Link
                    href="/"
                    className={`h-full w-1/4 p-2 flex justify-center items-center ${
                        pathname === '/' ? 'bg-textColor' : 'hover:text-buttonColor hover:bg-textColor'
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
                    className={`h-full w-1/4 p-2 flex justify-center items-center text-buttonColor ${
                        pathname === '/contact' ? 'bg-iconColor' : 'hover:bg-buttonColor hover:text-textColor'
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
                <Link href={"/"} className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10"  onClick={() => isOpen && toggleMenu()} >
                    <Image
                        src="/logos/logo-W2C.png"
                        alt="Logo"
                        width={80}
                        height={80}
                        className="bg-buttonColor rounded-full hover:cursor-pointer hover:bg-iconColor hover:border-2 border-buttonColor w-12 h-12 lg:w-20 lg:h-20 "
                    />
                </Link>
            </div>

            <div className="flex-[3] flex items-center justify-end h-full">
                <FaShoppingCart
                    onClick={() => isOpen && toggleMenu()}
                    size={38} // Taille par défaut pour mobile
                    className="h-full mr-2 p-1 pl-2 pr-2 hover:cursor-pointer lg:size-[2.2rem] lg:mr-8 lg:p-0.5 hover:text-buttonColor"
                />
                <FaUser
                    onClick={() => isOpen && toggleMenu()}
                    size={36} // Taille par défaut pour mobile
                    className="h-full mr-2 p-1 pl-2 pr-2 hover: cursor-pointer lg:size-[2.2rem] lg:mr-8 lg:p-0.5   hover:text-buttonColor"
                />
            </div>

        </nav>
    );
}
