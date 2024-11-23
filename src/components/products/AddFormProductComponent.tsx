'use client'
import React from 'react';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

export type FormData = {
    name:string;
    price:number;
    description:string;
    availability : boolean;
    weight: number;
};

const AddFormProduct: FC = () =>{
    const { register, handleSubmit } = useForm<FormData>();

    function onSubmit(data: FormData){
        sendData(data);
    }

    function sendData(data: FormData){
        console.log(data);
    }
    return(
        <>
            <h1>Ajouter un produit</h1>
            <form onSubmit={handleSubmit(onSubmit)}
                  className="w-[80vw] h-[80vh] md:w-[50vw] lg:w-[40vw] mx-auto bg-navbarColor flex flex-col justify-between p-8 space-y-6 rounded-md shadow-md text-white">
                <div className="flex flex-col w-full gap-y-4">

                    {/* section nom */}
                    <div className="flex flex-col w-full">
                        <label htmlFor="name" className="mb-1 font-bold">Nom</label>
                        <input placeholder="Saisir le nom"
                                  className="p-2 border rounded-md placeholder:text-textColor text-textColor"
                                  {...register('name', {required: true})}
                        ></input>
                    </div>

                    {/* section price */}
                    <div className="flex flex-col w-full">
                        <label htmlFor="price" className="mb-1 font-bold">Prix</label>
                        <input placeholder="Saisir le prix"
                               className="p-2 border rounded-md placeholder:text-textColor text-textColor"
                               {...register('price', {required: true})}
                        ></input>
                    </div>

                    {/* section description */}
                    <div className="flex flex-col w-full">
                        <label htmlFor="description" className="mb-1 font-bold">Description</label>
                        <textarea rows={4} placeholder="Saisir la description"
                               className="p-2 border rounded-md placeholder:text-textColor text-textColor"
                               {...register('description', {required: true})}
                        ></textarea>
                    </div>

                    {/* section availability */}
                    <div className="flex flex-col w-full">
                        <label htmlFor="availability" className="mb-1 font-bold">Disponible</label>
                        <input
                               className="p-2 border rounded-md placeholder:text-textColor text-textColor"
                               {...register('availability', {required: true})}
                        ></input>
                    </div>

                </div>

                {/* Bouton d'envoi */}
                <div className="flex justify-center">
                    <button
                        className="px-6 py-2 bg-buttonColor text-white font-semibold rounded-md shadow hover:cursor-pointer hover:text-textColor transition">
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}

export default AddFormProduct;