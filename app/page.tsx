import Link from "next/link";
import { products } from "@/lib/products";
import { createProductAction } from "@/lib/actions";
import { Button } from "@/components/ui/button";

export default function ProductsPage() {
  return (
    <main>
      <h1>상품 목록</h1>
      <p className="my-4"><Link href="/notices">공지사항 게시판으로 이동 →</Link></p>

      <form action={createProductAction}>
        <div>
          <label htmlFor="name">상품 이름</label>
          <input
            id="name"
            name="name"
            type="text"
            required
          />
        </div>

        <div>
          <label htmlFor="description">설명</label>
          <input
            id="description"
            name="description"
            type="text"
            required
          />
        </div>

        <div>
          <label htmlFor="price">가격</label>
          <input
            id="price"
            name="price"
            type="number"
            min="1"
            required
          />
        </div>

        <Button type="submit">상품 추가</Button>
      </form>

      <hr />

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