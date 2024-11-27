'use client'
import React from 'react';
import {FC} from 'react';
import {useForm} from 'react-hook-form';

// useMutation : gére les données de mutation de données
// useQueryClient : sert a lire les données
import {useMutation, useQueryClient} from "@tanstack/react-query";

export type FormData = {
    name: string;
    price: number;
    description: string;
    availability: boolean;
    weight: number;
    createdAt: Date;
};

const AddFormProduct: FC = () => {
    const { register, handleSubmit } = useForm<FormData>();
    // gére le cache des requetes
    const queryClient = useQueryClient();

    //
    const mutation = useMutation({
        mutationFn: async (formData: FormData) => {
            const productData = {
                name: formData.name,
                price: formData.price,
                description: formData.description,
                availability: formData.availability,
                weight: formData.weight,
                createdAt: formData.createdAt,
            };
            const response = await fetch('/api/products/add', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(productData),
            });
            if (!response.ok) {
                throw new Error("Erreur lors de la création")
            }
            return response.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['products']});
            console.log("Produit créé");
        },
        onError: (error) => {
            console.log("erreur lors de la création du produit", error);
        }
    })

    function onSubmit(data: FormData) {
        console.log( ` affichage du produit avant transformation " + ${JSON.stringify(data)}`);
        const enrichedData = {
            ...data,
            price: Number(data.price), // Convert price to number
            weight: Number(data.weight), // Convert weight to number
            availability: (data.availability as unknown as string) === "true", // Type assertion
            createdAt: new Date(), // Ajoute la date actuelle
        };
        console.log(`nous sommes dans le on Submit avant le mutate : ${JSON.stringify(enrichedData)}`);
        mutation.mutate(enrichedData)
    }

    return (
        <>
            <h1>Ajouter un produit</h1>
            <form onSubmit={handleSubmit(onSubmit)}
                  className="w-[80vw] h-[80vh] md:w-[50vw] lg:w-[40vw] mx-auto bg-navbarColor flex flex-col justify-between p-8 space-y-6 rounded-md shadow-md text-white">
                <div className="flex flex-col w-full gap-y-4">

                    {/* section nom */}
                    <div className="flex flex-col w-full">
                        <label htmlFor="name" className="mb-1 font-bold">Nom</label>
                        <input placeholder="Saisir le nom" type="text"
                               className="p-2 border rounded-md placeholder:text-textColor text-textColor"
                               {...register('name', {required: true})}
                        ></input>
                    </div>

                    {/* section price */}
                    <div className="flex flex-col w-full">
                        <label htmlFor="price" className="mb-1 font-bold">Prix</label>
                        <div className="relative">
                            <input
                                placeholder="Saisir le prix"
                                type="number"
                                step="0.01" // Permet d'accepter des valeurs décimales
                                min="0" // Empêche les valeurs négatives
                                className="p-2 border rounded-md pr-12 placeholder:text-textColor text-textColor w-full"
                                {...register('price', {required: true})}
                            />
                            <span className="absolute inset-y-0 right-2 flex items-center text-textColor">€</span>
                        </div>
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
                        <div className="flex flex-row justify-around space-x-4">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    value="true"
                                    {...register('availability', {required: true})}
                                    className="text-textColor"
                                />
                                <span>Oui</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    value="false"
                                    {...register('availability', {required: true})}
                                    className="text-textColor"
                                />
                                <span>Non</span>
                            </label>
                        </div>
                    </div>

                    {/* section poids */}
                    <div className="flex flex-col w-full">
                        <label htmlFor="weight" className="mb-1 font-bold">Poids</label>
                        <div className="relative">
                            <input
                                placeholder="Saisir le poids"
                                className="p-2 border rounded-md pr-12 placeholder:text-textColor text-textColor w-full"
                                type="number"
                                step="0.01" // Permet d'accepter des valeurs décimales
                                min="0" // Empêche les valeurs négatives
                                {...register('weight', {required: true})}
                            />
                            <span className="absolute inset-y-0 right-2 flex items-center text-textColor">g</span>
                        </div>
                    </div>
                </div>

                {/* Bouton d'envoi */}
                <div className="flex justify-center">
                    <button disabled={mutation.isPending}
                            type="submit"
                            className={`px-6 py-2 bg-buttonColor text-white font-semibold rounded-md shadow hover:cursor-pointer hover:text-textColor transition ${
                                mutation.isPending
                                    ? "bg-lightBrownColor cursor-not-allowed"
                                    : "bg-buttonColor hover:text-textColor"
                            }`}>
                        {mutation.isPending ? "Création en cours " : " Ajouter produit"}
                    </button>
                </div>
            </form>
        </>
    )
}

export default AddFormProduct;