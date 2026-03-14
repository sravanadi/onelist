import Link from 'next/link';
import Image from 'next/image';

export default function CategoryCard({ category }: { category: any }) {
    return (
        <Link href={category.slug}>
            <div className="bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-primary hover:bg-accent transition-all group h-full cursor-pointer">
                <div className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform flex items-center justify-center">
                    <Image src={category.image} alt={category.name} width={48} height={48} className="object-contain" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{category.name}</h3>
                <p className="text-muted-foreground text-sm hidden md:block">{category.description}</p>
            </div>
        </Link>
    );
}
