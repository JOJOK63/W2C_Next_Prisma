import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card" // Adaptez le chemin si nécessaire
import Image from "next/image"
export default function CardProduct(){
    return(
        <Card className="w-full max-w-md m-auto">
            <CardHeader className="p-0">
                <div className="relative w-full h-20"> {/* Wrapper pour responsive */}
                    <Image
                        src="/products/17107.jpg" // Chemin de l'image
                        alt="Image de la carte"
                        layout="fill" // Image occupe tout l'espace du parent
                        objectFit="cover" // Garde les proportions de l'image tout en remplissant l'espace
                        className="rounded-t-xl" // Arrondir les coins supérieurs
                    />
                </div>
                <CardTitle className="m-auto">Titre de la Carte</CardTitle>

            </CardHeader>
            <CardContent>
                <CardDescription>Petite description sous l&#39;image.</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
                <div>Price</div>
                <div> Cart </div>
            </CardFooter>
        </Card>
)
}

