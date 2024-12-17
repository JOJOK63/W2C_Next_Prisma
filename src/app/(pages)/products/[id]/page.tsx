import CardProductDetail from "@/components/products/CardProductDetails";

async function getProductById(id: string) {
    const products = [
        {
            id: 1,
            name: "Produit 1",
            description: "Description détaillée du produit 1",
            image: "/products/cookies-1.jpg",
            price: 20,
            weight : 2.2,
            availability : "true"
        },
        {
            id: 2,
            name: "Produit 2",
            description: "Description détaillée du produit 2",
            image: "/products/cookies.jpg",
            price: 25,
            weight : 2.2,
            availability : "true"
        },
        {
            id: 3,
            name: "Produit 3",
            description: "Description détaillée du produit 3",
            image: "/products/minis_cookies.jpg",
            price: 30,
            weight : 2.2,
            availability : "true"
        },
    ];

    return products.find((product) => product.id === parseInt(id));
}

export default async function ProductDetails({ params }: { params: { id: string } }) {
    const product = await getProductById(params.id);

    if (!product) {
        return <h1>Produit non trouvé</h1>;
    }

    return (
        <>
            <h1 className="text-center text-3xl font-bold my-6 ">Détails du produit</h1>
            <div className="flex justify-center">
                <CardProductDetail product={product} />
            </div>
        </>
    );
}
