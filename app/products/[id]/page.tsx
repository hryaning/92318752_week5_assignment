import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import LikeButton from "@/components/LikeButton";

type Props = {
    params: Promise<{ id: string }>;
};

export default async function ProductDetailPage({ params }: Props) {
    const { id } = await params;
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
    notFound();
    }

    return (
    <main>
        <h1>{product.name}</h1>

        <p>{product.description}</p>
        <LikeButton />

        <p>{product.price.toLocaleString()}원</p>
        <LikeButton />

        <Link href="/products">← 상품 목록으로</Link>
    </main>
    );
}