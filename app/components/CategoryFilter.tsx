'use client';

import { useState, useMemo } from 'react';
import { useProducts } from '../context/ProductsContext';
import { ProductCard } from './ProductCard';

export default function CategoryFilter() {
    const { products, loading, error } = useProducts();
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [minPrice, setMinPrice] = useState<string>('');
    const [maxPrice, setMaxPrice] = useState<string>('');
    const [sortBy, setSortBy] = useState<string>('name');

    const categories = useMemo(() => {
        const uniqueCategories = Array.from(
            new Set(products.map(product => product.category))
        ).filter(Boolean) as string[];
        return uniqueCategories.sort();
    }, [products]);

    const filteredProducts = useMemo(() => {
        let filtered = products;
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(product => product.category === selectedCategory);
        }
        if (minPrice !== '') {
            const minPriceNumber = Number(minPrice);
            filtered = filtered.filter(product => product.price >= minPriceNumber);
        }
        if (maxPrice !== '') {
            const maxPriceNumber = Number(maxPrice);
            filtered = filtered.filter(product => product.price <= maxPriceNumber);
        }
        let sorted = filtered;
        switch (sortBy) {
            case 'name':
                sorted = sorted.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'price':
                sorted = sorted.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                sorted = sorted.sort((a, b) => b.price - a.price);
                break;
        }
        return sorted;
    }, [products, selectedCategory, minPrice, maxPrice, sortBy]);

    if (loading) {
        return <div className="flex items-center justify-center min-h-full"><p>Loading...</p></div>;
    }

    if (error) {
        return <div className="flex items-center justify-center min-h-full"><p className="text-red-500">Error: {error}</p></div>;
    }

    return (
        <div className="flex flex-row min-h-full w-full mt-6 gap-8">
            {/* Sidebar with Categories */}
            <div className="w-64 border-gray-200 bg-white">
                <h2 className="text-xl font-bold text-black mb-4">Categories</h2>
                <div className="flex flex-col gap-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input
                            type="radio"
                            name="category"
                            value="all"
                            checked={selectedCategory === 'all'}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-5 h-5 appearance-none border-2 rounded-full cursor-pointer 
                                checked:bg-blue-300 checked:border-blue-500 
                                bg-gray-600 border-gray-400 
                                focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                        />
                        <span className="text-gray-900 font-normal">All</span>
                    </label>
                    {categories.map((category) => (
                        <label key={category} className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="radio"
                                name="category"
                                value={category}
                                checked={selectedCategory === category}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-5 h-5 appearance-none border-2 rounded-full cursor-pointer 
                                    checked:bg-blue-300 checked:border-blue-500 
                                    bg-gray-600 border-gray-400 
                                    focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                            />
                            <span className="text-gray-900 capitalize font-normal">{category}</span>
                        </label>
                    ))}
                    <h2 className="text-xl font-bold text-black mb-4 mt-4">Price Range</h2>
                    <div>
                    <label className="flex items-center cursor-pointer text-black font-[500]">Min Price</label>
                    <input type="number" placeholder="$0" className="w-full bg-gray-100 h-10 px-2 rounded-sm placeholder:text-gray-500 text-gray-500" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                    </div>
                    <div>
                    <label className="flex items-center cursor-pointer text-black font-[500]">Max Price</label>
                    <input type="number" placeholder="$999" className="w-full bg-gray-100 h-10 px-2 rounded-sm placeholder:text-gray-500 text-gray-500" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                    </div>
                    <div>
                    <h2 className="text-xl font-bold text-black mb-2 mt-4">Sort By</h2>
                    <select className="w-full bg-white border h-10 px-2 rounded-sm placeholder:text-gray-500 text-gray-500" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="name">Name (A-Z)</option>
                        <option value="price">Price (Low to High)</option>
                        <option value="price-desc">Price (High to Low)</option>
                    </select>
                    </div>
                </div>
            </div>


            {/* Products Grid */}
            <div className="flex-1">
            <h2 className="text-gray-500 mb-4">Showing {filteredProducts.length} products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {filteredProducts.length === 0 ? (
                        <p className="text-gray-500 col-span-full text-center py-10">
                            No products found in this category.
                        </p>
                    ) : (
                        filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}