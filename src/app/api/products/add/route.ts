import {NextResponse} from "next/server";
import prisma from "@/db/db";

export async function POST(request : Request){
    const {name, price, description, availability, weight, createdAt}=await request.json()
    try{
        const product = await prisma.product.create({
            data: {
                name,
                price,
                description,
                availability,
                weight,
                createdAt
            }
        })
        return NextResponse.json(product, {status:201})

    }catch(error){
        console.log(error);
        return NextResponse.json({error: " Erreur lors de la création du produit"},
            {status:500}
        )
    }
}