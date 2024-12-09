import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card" // Adaptez le chemin si nécessaire
import Image from "next/image"
import {Product} from "@/app/model/product";

export default function CardProductDetail({ product }: { product: Product }) {
    return (
            <Card className="w-[80%] m-auto max-w-md m-auto text-textColor">
                <CardHeader className="p-0">
                    <div className="relative w-full h-40"> {/* Wrapper pour responsive */}
                        <Image
                            src={product.image}
                            alt={product.name}
                            layout="fill" // Image occupe tout l'espace du parent
                            objectFit="cover" // Garde les proportions de l'image tout en remplissant l'espace
                            className="rounded-t-xl" // Arrondir les coins supérieurs
                        />
                    </div>
                    <CardTitle className="text-center">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className="text-sm text-gray-600">
                        {product.description}
                    </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                    <span className="text-lg font-bold">{product.price}</span>
                    <span className="text-lg font-bold">cart</span>
                </CardFooter>
            </Card>
    );
}