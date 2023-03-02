export type Product = {
    id: number;
    title: string;
    category: string;
    price: number;
    image: string;
};

export type CartProduct = Product & {
    count: number;
};

