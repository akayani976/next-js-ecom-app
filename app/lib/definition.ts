export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
    category: string;
    created_at?: string; // Supabase uses created_at by default
}