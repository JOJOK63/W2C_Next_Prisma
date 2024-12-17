"use client"
import {useQuery} from "@tanstack/react-query";

import CardProduct from "@/components/products/CardProduct";
import React from "react";
import { Product } from "@/app/model/product";

const fetchProducts = async () => {
    const response = await fetch("/api/products");

    if(!response.ok) {
        throw new Error(" Erreur lors de la récupération des produits")
    }
    return response.json();
}

export default function TableProduct(){

    const {data : products, error, isLoading} = useQuery<Product[], Error>({
        queryKey: ["products"],
        queryFn: fetchProducts
    })
    if(isLoading){
        return <p className="text-center"> Chargement en cours </p>
    }

    if(error){
        return <p className="text-center"> Erreur lors du chargement </p>
    }
    if (!products || products.length === 0) {
        return <p className="text-center">Aucun produits disponible.</p>;
    }
    return (
        <div className="flex gap-8 flex-wrap justify-center">
            {products.map((product : Product) => (
                <CardProduct key={product.id} product={product} />
            ))}
        </div>
    );
}
