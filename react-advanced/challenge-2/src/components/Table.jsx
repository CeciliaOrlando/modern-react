'use client';

import { useState } from 'react';

export default function Table({ status, species, gender, origin, location }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex flex-col gap-4 w-full">
            <table>
                <tbody>
                    <tr className="border-b border-b-slate-600">
                        <td className="p-2">Status:</td>
                        <td className="p-2 text-green-300">{status}</td>
                    </tr>
                    <tr className="border-b border-b-slate-600">
                        <td className="p-2">Specie:</td>
                        <td className="p-2 text-green-300">{species}</td>
                    </tr>
                    <tr className="border-b border-b-slate-600">
                        <td className="p-2">Gender:</td>
                        <td className="p-2 text-green-300">{gender}</td>
                    </tr>

                    {isOpen && (
                        <>
                            <tr className="border-b border-b-slate-600">
                                <td className="p-2">Origin:</td>
                                <td className="p-2 text-green-300">
                                    {origin.name}
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">Location:</td>
                                <td className="p-2 text-green-300">
                                    {location.name}
                                </td>
                            </tr>
                        </>
                    )}
                </tbody>
            </table>
            <button
                className="border border-green-600 rounded-full py-1 px-4 w-full mt-6"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? 'Hide data' : 'Show more'}
            </button>
        </div>
    );
}



[]
