'use client'
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Product } from "@/app/model/product";
import { FaShoppingCart } from "react-icons/fa"; // Import de l'icône Cart

export default function CardProduct({ product }: { product: Product }) {
    function coucou(){
        alert("click on card " + product.id);
    }

    function toSlug(name : string) {
        return name
            .toLowerCase()                 // Convertit tout en minuscules
            .replace(/\s+/g, '-')          // Remplace les espaces par des tirets
            .replace(/\_+/g, '-')          // Remplace les espaces par des tirets
            .replace(/[^\w\-]+/g, '')      // Supprime les caractères non alphanumériques sauf tirets
            .replace(/\-\-+/g, '-')        // Remplace les multiples tirets par un seul
            .replace(/^-+/, '')            // Supprime les tirets en début de chaîne
            .replace(/-+$/, '');           // Supprime les tirets en fin de chaîne
    }


    return (
        <Link href={`/products/${product.id}`} className="w-[300px]">
            <Card className="w-full h-[350px]
              flex flex-col overflow-hidden
                            transition-transform duration-300 hover:shadow-lg
                            bg-lightBrownColor">
                <CardHeader className="p-0 relative w-full h-48">
                    <Image
                        src={`/products/${toSlug(product.name)}.jpg`}
                        alt={product.name}
                        width={300}  // Largeur fixe
                        height={192}  // Hauteur fixe (48 * 4)
                        className="object-cover"
                        style={{
                            width: '100%',
                            height: '100%'
                        }}
                    />
                </CardHeader>

                <CardTitle className="text-center text-titleColor my-2 px-4">
                    {product.name}
                </CardTitle>

                <CardContent className="flex-grow px-4">
                    <CardDescription className="text-sm text-textColor line-clamp-2">
                        {product.description}
                    </CardDescription>
                </CardContent>

                <CardFooter className="flex w-[90%] mx-auto justify-between items-center p-2">
                    <span className="text-lg font-bold text-textColor">{product.price} €</span>
                    <button
                        onClick={coucou}
                        className="flex items-center gap-2 bg-buttonColor text-white px-3 py-1 rounded hover:bg-primary-dark transition-all"
                    >
                        <FaShoppingCart size={16} className="text-titleColor" />
                    </button>
                </CardFooter>
            </Card>
        </Link>
    );
}