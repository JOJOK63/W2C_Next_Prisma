import AddFormProduct from "@/components/products/AddFormProductComponent";

export default function Administration() {
    return (
        <>
            <h1>Administration</h1>


            <div className="mt-6 w-full flex items-center justify-center flex-col ">
                <AddFormProduct></AddFormProduct>
            </div>
        </>
    )
}