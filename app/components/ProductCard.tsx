import Link from "next/link";
import { Product } from "../lib/definition"
import AddToCartButton from "./AddToCartButton";

export function ProductCard({product}: {product: Product}) {
    return (
        <Link href={`/productDetails?category=${encodeURIComponent(product.category)}&name=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}&image_url=${encodeURIComponent(product.image_url)}&description=${encodeURIComponent(product.description ?? '')}`}>
            <div key={product.id} className="border rounded-xl w-[271] h-[424] overflow-hidden group hover:shadow-xl">
            <img 
                src={product.image_url} 
                alt={product.name}
                className="w-full h-[271] object-cover rounded mb-6 group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="p-4">
                <h2 className="text-xl font-bold text-black">{product.name}</h2>
                <p className="text-sm text-gray-500">{product.category}</p>
                <div className="flex flex-row items-center justify-between">
                    <p className="text-lg font-semibold text-black">${product.price}</p>
                    <AddToCartButton />
                </div>
            </div>
        </div>
        </Link>
    );
}