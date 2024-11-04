'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: string;
    message: string;
};

const  ContactFormComponent : FC = () => {
    const { register, handleSubmit } = useForm<FormData>();

    function onSubmit(data: FormData) {
        sendEmail(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className=''>
                <div>
                    <label htmlFor='firstname' className=''>
                        Prénom
                    </label>
                    <input type='text' placeholder='Prénom' className=''
                        {...register('firstname', {required: true})}
                    />
                </div>
                <div>
                    <label htmlFor='lastname' className=''>
                        Nom
                    </label>
                    <input type='text' placeholder='Nom' className=''
                        {...register('lastname', {required: true})}
                    />
                </div>
            </div>

            <div className='mb-5'>
                <label htmlFor='email' className=''>
                    Adresse email
                </label>
                <input type='email' placeholder='example@domain.com' className=''
                    {...register('email', { required: true })}
                />
            </div>

            <div className='mb-5'>
                <label htmlFor='message' className=''>
                    Message
                </label>
                <textarea rows={4} placeholder='Saisir votre message'
                    className=''
                    {...register('message', { required: true })}
                ></textarea>
            </div>

            <div>
                <button className='hover:shadow-form rounded-md bg-textColor py-3 px-8 text-base font-semibold text-white outline-none'>
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ContactFormComponent;