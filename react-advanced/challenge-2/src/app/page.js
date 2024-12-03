import Card from '@/components/Cards';
import Image from 'next/image';

export default async function Home() {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const { results } = await response.json();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {results.map((character) => (
                    <Card key={character.id} character={character} />
                ))}
            </div>
        </main>
    );
}
