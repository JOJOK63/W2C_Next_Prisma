import {NextResponse} from "next/server";
import prisma from "@/db/db";

export async function GET() {

    //to normalize the name of src image
    function toSlug(name: string) {
        return name
            .toLowerCase()                 // Converts everything to lowercase
            .replace(/\s+/g, '-')          // Replaces spaces with dashes
            .replace(/\_+/g, '-')          // Replaces underscores with dashes
            .replace(/[^\w\-]+/g, '')      // Removes non-alphanumeric characters except dashes
            .replace(/[\u2013\u2014]+/g, '-') // Replaces long dashes (–, —) with simple dashes
            .replace(/\-\-+/g, '-')        // Replaces multiple dashes with a single dash
            .replace(/^-+/, '')            // Removes dashes at the beginning of the string
            .replace(/-+$/, '');           // Removes dashes at the end of the string
    }



    try {
        const products = await prisma.product.findMany(
            {
            orderBy: {
                name: 'asc'
            }
        });

        // Ajout du chemin dynamique pour chaque produit
        const productsWithImages = products.map(product => ({
            ...product,
            image: `/products/${toSlug(product.name)}.jpg`
        }));

        console.log(productsWithImages);
        return NextResponse.json(productsWithImages);
    }catch (error){
        console.log(error);
        return NextResponse.json({error: " Erreur lors de la récupération des produits"},
            {status:500}
        )
    }
}
