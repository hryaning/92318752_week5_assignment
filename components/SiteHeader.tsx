import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b px-6 py-4">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3">
        <Link href="/" className="font-bold">웹서버보안프로그래밍</Link>
        <nav className="flex gap-4">
          <Link href="/products">상품</Link>
          <Link href="/notices">공지사항</Link>
          <Link href="/notices/new">글쓰기</Link>
          <Link href="/about">소개</Link>
        </nav>
      </div>
    </header>
  );
}
