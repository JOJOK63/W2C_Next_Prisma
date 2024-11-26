'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
    firstname: string;
    lastname: string;
    email: string;
    message: string;
};

const ContactFormComponent: FC = () => {
    const { register, handleSubmit } = useForm<FormData>();

    function onSubmit(data: FormData) {
        sendEmail(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-[80vw] h-[80vh] md:w-[50vw] lg:w-[40vw] mx-auto bg-navbarColor flex flex-col justify-between p-8 space-y-6 rounded-md shadow-md text-white">
            {/* Section Prénom et Nom */}
            <div className="flex w-full gap-x-4">
                <div className="flex flex-col w-1/2">
                    <label htmlFor="firstname" className="mb-1 font-bold">Prénom</label>
                    <input type="text" placeholder="Prénom" className="p-2 border rounded-md placeholder:text-textColor text-textColor"
                           {...register('firstname', { required: true })}
                    />
                </div>
                <div className="flex flex-col w-1/2">
                    <label htmlFor="lastname" className="mb-1 font-bold">Nom</label>
                    <input type="text" placeholder="Nom" className="p-2 border rounded-md placeholder:text-textColor text-textColor"
                           {...register('lastname', { required: true })}
                    />
                </div>
            </div>

            {/* Section Email */}
            <div className="flex flex-col w-full">
                <label htmlFor="email" className="mb-1 font-bold">Adresse email</label>
                <input type="email" placeholder="example@domain.com" className="p-2 border rounded-md placeholder:text-textColor text-textColor"
                       {...register('email', { required: true })}
                />
            </div>

            {/* Section Message */}
            <div className="flex flex-col w-full">
                <label htmlFor="message" className="mb-1 font-bold">Message</label>
                <textarea rows={4} placeholder="Saisir votre message" className="p-2 border rounded-md placeholder:text-textColor text-textColor"
                          {...register('message', { required: true })}
                ></textarea>
            </div>

            {/* Bouton d'envoi */}
            <div className="flex justify-center">
                <button className="px-6 py-2 bg-buttonColor text-white font-semibold rounded-md shadow hover:cursor-pointer hover:text-textColor transition">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ContactFormComponent;
