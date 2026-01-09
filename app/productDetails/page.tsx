import Link from "next/link";
import { HiArrowLeft, HiCheck, HiGlobeAlt, HiInbox } from "react-icons/hi";
import AddToCartButton from "../components/AddToCartButton";
import ProductDetailsPageCards from "../components/ProductDetailsPageCards";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import ContinueShoppingButton from "../components/ContinueShoppingButton";

interface ProductDetailsProps {
    searchParams: {
        category: string;
        name: string;
        price: string;
        image_url: string;
        description: string;
    }
}

export default async function ProductDetails({ searchParams }: ProductDetailsProps) {
    const { category, name, price, image_url, description } = await searchParams;
    return (
        <div className="flex flex-col min-h-screen flex-1 bg-white dark:bg-white px-25 py-6">
            <Link href="/products" className="flex flex-row items-center gap-2 mt-4">
                <HiArrowLeft className="w-4 h-4 text-black" />
                <p className="text-black font-[400]">Back to Products</p>
            </Link>
            <div className="flex flex-row items-start justify-start mt-6 gap-10">
                <img src={image_url} alt={name} className="w-[553.5] h-[553.5] object-cover rounded rounded-lg mt-6" />
                <div className="flex flex-col items-start justify-start h-[570]">
                    <div className="items-center justify-center rounded-full py-2 px-4 bg-blue-100 mt-6">
                        <p className="text-blue-500 font-[400]">{category}</p>
                    </div>
                        <h1 className="text-black text-3xl font-bold mt-4">{name}</h1>
                        <h1 className="text-black text-3xl font-bold mt-6">${price}</h1>
                        <h2 className="text-black text-md mt-8 font-bold">Description</h2>
                        <p className="text-gray-500 font-[500] mt-2">{description}</p>
                        <div className="mt-auto w-full flex flex-col gap-4 mt-4">
                            <AddToCartButton  width={'full'}/>
                            <ContinueShoppingButton width={'full'} />
                        </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-20 mt-10">
                <ProductDetailsPageCards icon={<HiCheck className="w-8 h-8 text-blue-500" />} title="Quality Guaranteed" description="30-day money-back guarantee" />
                <ProductDetailsPageCards icon={<HiOutlineArchiveBox className="w-8 h-8 text-blue-500" />} title="Free Shipping" description="On orders over $50" />
                <ProductDetailsPageCards icon={<HiGlobeAlt className="w-8 h-8 text-blue-500" />} title="Fast Delivery" description="Quick and reliable shipping to you door" />
            </div>
        </div>
    )
}