import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

interface ShopNowButtonProps {
    showIcon?: boolean;
    text?: string;
    topMargin?: number;
}

export default function ShopNowButton({showIcon = false, text = "Shop Now", topMargin = 8}: ShopNowButtonProps) {
    return (
        <Link href="/products" className={`flex flex-row items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md mt-${topMargin}`}>{text}{ showIcon === true ? <HiArrowRight className="w-6 h-6" /> : null}</Link>
    )
}