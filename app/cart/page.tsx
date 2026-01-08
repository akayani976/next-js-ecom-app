import { LucideShoppingBag } from "lucide-react";
import ShopNowButton from "../components/ShopNowButton";

export default function Cart() {
    return (
            <div className="flex flex-col min-h-full items-start justify-start bg-white dark:bg-white flex-1 w-full">
                <h1 className="text-black text-3xl font-bold ml-10 mt-10 w-full">Shopping Cart</h1>
                <div className="flex flex-col items-center justify-center my-auto mx-auto">
                    <LucideShoppingBag className="w-16 h-16 text-gray-200" />
                    <p className="text-gray-500 text-xl font-[600] mt-4">Your cart is empty</p>
                    <ShopNowButton showIcon={false} text="Start Shopping" topMargin={4} />
                </div>
            </div>
    )
}