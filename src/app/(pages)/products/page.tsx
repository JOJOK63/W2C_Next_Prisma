import React from 'react';
import CardProduct from "@/components/products/CardProduct";
import { Product } from "@/app/model/product";

export default function Products() {
    const products: Product[] = [
        {
            id: 1,
            name: "Produit 1",
            description: "Description détaillée du produit 1 zefazefazef az eazefazfazefzefazf zer azerazerzrazefazeaze fazefazefazef azefazefzefazefazefazefazefazefzaefazefze azere z zaerzedasrze rfrgre azerfazfz ",
            image: "/products/17107.jpg",
            price: 20,
            weight: 2.2,
            availability: "true"
        },
        {
            id: 2,
            name: "Produit 2",
            description: "Description détaillée du produit 2 azeazefazefzea azefazefazefazfaze",
            image: "/products/cookies.jpg",
            price: 25,
            weight: 2.2,
            availability: "true"
        },
        {
            id: 3,
            name: "Produit 3",
            description: "Description détaillée du produit 3 azfazefaezfazefazefaezf",
            image: "/products/minis_cookies.jpg",
            price: 30,
            weight: 2.2,
            availability: "true"
        },
        {
            id: 3,
            name: "Produit 3",
            description: "Description détaillée du produit 3 azefazefazefazfazfazffazefaze zefa ze",
            image: "/products/minis_cookies.jpg",
            price: 30,
            weight: 2.2,
            availability: "true"
        },
        {
            id: 3,
            name: "Produit 3",
            description: "Description détaillée du produit 3 azefazefazefa eazraze azraze aze",
            image: "/products/minis_cookies.jpg",
            price: 30,
            weight: 2.2,
            availability: "true"
        },
        {
            id: 3,
            name: "Produit 3",
            description: "Description détaillée du produit 3 azefaefdsfaeze rzaeraze",
            image: "/products/minis_cookies.jpg",
            price: 30,
            weight: 2.2,
            availability: "true"
        },
        {
            id: 3,
            name: "Produit 3",
            description: "Description détaillée du produit 3 azerfaez azeraze azer azer",
            image: "/products/minis_cookies.jpg",
            price: 30,
            weight: 2.2,
            availability: "true"
        },
        {
            id: 3,
            name: "Produit 3",
            description: "Description détaillée du produit 3 azerazerazerazerazerzaraz ",
            image: "/products/minis_cookies.jpg",
            price: 30,
            weight: 2.2,
            availability: "true"
        },
        {
            id: 3,
            name: "Produit 3",
            description: "Description détaillée du produit 3",
            image: "/products/minis_cookies.jpg",
            price: 30,
            weight: 2.2,
            availability: "true"
        },
        {
            id: 3,
            name: "Produit 3",
            description: "Description détaillée du produit 3",
            image: "/products/minis_cookies.jpg",
            price: 30,
            weight: 2.2,
            availability: "true"
        }
    ];

    return (
        <div className="container mx-auto px-4 bg-red-700">
            <h1 className="text-center text-3xl font-bold my-6 text-titleColor ">
                Nos produits
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3
                            gap-6 place-items-center justify-items-center">
                {products.map((product) => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}