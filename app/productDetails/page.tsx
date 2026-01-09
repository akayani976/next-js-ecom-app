interface ProductDetailsProps {
    params: {
        category: string;
        name: string;
        price: number;
        image_url: string;
        description: string;
    }
}

export default function ProductDetails({ params }: ProductDetailsProps) {
    const { category, name, price, image_url, description } = params;
    return (
        <div>
            <h1>Product Details</h1>
        </div>
    )
}