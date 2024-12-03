
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Card({ character }) {
    const { id, name, image, species, gender } = character;
    return (
        <Link href={`/characters/${id}`}>
            <article class="relative flex flex-col rounded-xl border border-green-600 text-gray-300 shadow-md hover:scale-[1.02] transition">
                <div class="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-clip-border text-gray-700 shadow-lg">
                    <Image src={image} alt={name} fill={true} />
                </div>
                <div class="p-6 text-center">
                    <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {name}
                    </h4>
                    <p class="block bg-gradient-to-tr text-gray-300 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                        Specie:{' '}
                        <span className="text-green-400">{species}</span>
                    </p>
                    <p class="block bg-gradient-to-tr text-gray-300 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                        Gender: <span className="text-green-400">{gender}</span>
                    </p>
                </div>
                <div class="flex justify-center gap-7 p-6 pt-2">
                    <a
                        href="#facebook"
                        class="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                    >
                        <i class="fab fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a
                        href="#twitter"
                        class="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                    >
                        <i class="fab fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a
                        href="#instagram"
                        class="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                    >
                        <i class="fab fa-instagram" aria-hidden="true"></i>
                    </a>
                </div>
            </article>
        </Link>
    );
}
