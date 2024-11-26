import AddFormProduct from "@/components/products/AddFormProductComponent";
export default function Products(){
    return (
        <>
            <h1>Nos produits</h1>

            <div className="mt-6 w-full flex items-center justify-center flex-col ">
                <AddFormProduct></AddFormProduct>
            </div>
        </>
    )
}