import Table from '@/components/Table';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default async function Page({ params }) {
    const { id } = params;
    const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
    );
    const { name, status, species, gender, origin, location, image } =
        await response.json();

    return (
        <main className="min-h-screen p-24">
            <Link href={'/'} className="flex mb-6">
                {' '}
                {`< Ir al Inicio`}
            </Link>

            <h1 className="text-3xl mb-4 text-green-500">{name}</h1>
            <div className="flex flex-col md:flex-row gap-12">
                <aside>
                    <Image src={image} alt={name} width={447} height={400} />
                </aside>

                <div className="flex items-center">
                    <Table
                        status={status}
                        species={species}
                        gender={gender}
                        origin={origin}
                        location={location}
                    />
                </div>
            </div>
        </main>
    );
}
