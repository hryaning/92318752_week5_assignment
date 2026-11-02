export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
};

export const products: Product[] = [
    {
    id: 1,
    name: "노트북",
    description: "개발용 노트북",
    price: 1200000,
    },
    {
    id: 2,
    name: "키보드",
    description: "기계식 키보드",
    price: 150000,
    },
    {
    id: 3,
    name: "마우스",
    description: "무선 마우스",
    price: 80000,
    },
];

export function addProduct(
    name: string,
    description: string,
    price: number
) {
    const newProduct: Product = {
    id: products.length + 1,
    name,
    description,
    price,
    };

    products.push(newProduct);
}