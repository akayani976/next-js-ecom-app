import { HiCheck, HiOutlineCurrencyDollar, HiOutlineLightningBolt } from "react-icons/hi";
import HomePageCards from "./components/HomePageCards";
import ShopNowButton from "./components/ShopNowButton";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start bg-white dark:bg-white">
      <main className="w-full flex flex-col">
        <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-200">
          <h1 className="text-black text-5xl font-bold">Welcome to our e-commerce store</h1>
          <p className="text-gray-500 text-2xl mt-6">Discover amazing products at unbeatable prices</p>
          <ShopNowButton showIcon={true} topMargin={10} />
        </section>
        <div className="flex flex-row items-center justify-center bg-white dark:bg-white flex-1 w-full gap-20 py-20">
            <HomePageCards icon={HiCheck} title="Quality Products" description="Carefully curated selection of high-quality products" />
            <HomePageCards icon={HiOutlineCurrencyDollar} title="Great Prices" description="Competitive pricing on all products" />
            <HomePageCards icon={HiOutlineLightningBolt} title="Fast Delivery" description="Quick and reliable delivery to your doorstep" />
        </div>
      </main>
    </div>
  );
}
