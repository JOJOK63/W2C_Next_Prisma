import React from 'react';
import TableProduct from "@/components/products/TableProducts";

export default function Products() {
    return (
        <div className="container mx-auto px-4 ">
            <h1 className="text-center text-3xl font-bold my-6 text-titleColor ">
                Nos produits
            </h1>
            <TableProduct></TableProduct>
        </div>
    );
}