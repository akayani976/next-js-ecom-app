import Link from "next/link";

interface AddToCartButtonProps {
    width?: string;
}

export default function AddToCartButton({width = '0'}: AddToCartButtonProps) {
    return (
            <button className={`bg-blue-500 text-white px-4 py-2 rounded-md w-${width} border border-gray-300`}>Add to Cart</button>
    )
}