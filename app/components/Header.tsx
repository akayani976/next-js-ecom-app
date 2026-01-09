"use client";

import { HiOutlineShoppingCart } from "react-icons/hi";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
    const pathname = usePathname();
    return (
        <header className="flex h-18 w-full flex-row items-center justify-between bg-white dark:white relative z-10 shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                <div className="flex flex-row items-center justify-start ml-25">
                    <HiOutlineShoppingCart className="text-3xl text-white mr-2 bg-blue-500 rounded p-2" />
                    <p className="text-sm text-black font-bold">E-Commerce App</p>
                </div>
                <div className="flex flex-row items-center justify-end mr-30">
                    <Link href="/" className={`text-sm ${pathname === '/' ? 'text-blue-500' : 'text-gray-500'} font-bold mr-10 hover:text-blue-500`}>Home</Link>
                    <Link href="/products" className={`text-sm ${pathname === '/products' || pathname === '/productDetails' ?  'text-blue-500' : 'text-gray-500'} font-bold mr-6 hover:text-blue-500`}>Products</Link>
                    <Link href="/cart" className={`text-sm ${pathname === '/cart' ? 'text-blue-500' : 'text-gray-500'} font-bold flex items-center flex-row group hover:text-blue-500`}> <HiOutlineShoppingCart className={`w-8 h-8 font-bold ${pathname === '/cart' ? 'text-blue-500' : 'text-gray-500'} p-2 group-hover:text-blue-500`} /> Cart</Link>
                </div>
        </header>
    )
}