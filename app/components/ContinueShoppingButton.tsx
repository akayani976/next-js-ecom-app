interface ContinueShoppingButtonProps {
    width?: string;
}

export default function ContinueShoppingButton({width = 'full'}: ContinueShoppingButtonProps) {
    return (
        <button className={`bg-white text-black px-4 py-2 rounded-md w-${width} border border-gray-300`}>Continue Shopping</button>
    )
}