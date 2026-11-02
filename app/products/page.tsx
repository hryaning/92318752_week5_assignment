import Link from "next/link";
import { products } from "@/lib/products";

export default function ProductsPage() {
    return (
    <main>
        <h1>상품 목록</h1>

        <ul>
        {products.map((product) => (
            <li key={product.id}>
            <Link href={`/products/${product.id}`}>
                {product.name} - {product.price.toLocaleString()}원
            </Link>
            </li>
        ))}
        </ul>
    </main>
    );
}