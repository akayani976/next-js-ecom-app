import CategoryFilter from "../components/CategoryFilter";

export default function Products() {
    return (
        <div className="flex flex-col min-h-screen flex-1 bg-white dark:bg-white px-25 py-6">
                <h1 className="text-3xl font-bold text-black">Products</h1>
                <CategoryFilter />
        </div>
    );
}