interface ProductDetailsPageCardsProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function ProductDetailsPageCards({icon, title, description}: ProductDetailsPageCardsProps) {
    return (
        <div className="h-[145] w-[369] border border-gray-300 rounded-lg items-center justify-center flex flex-col gap-2">
                    {icon}
                    <p className="text-black text-lg font-bold">{title}</p>
                    <p className="text-gray-500 text-sm">{description}</p>
                </div>
    );
}
