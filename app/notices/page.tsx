import Link from "next/link";
import { getNotices } from "@/lib/notices";

export default async function NoticesPage() {
  const notices = await getNotices();

  return (
    <main className="mx-auto w-full max-w-3xl p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">공지사항</h1>
        <Link className="rounded bg-blue-600 px-4 py-2 text-white" href="/notices/new">
          + 새 글 작성
        </Link>
      </div>
      {notices.length === 0 ? (
        <p className="mt-6">등록된 공지사항이 없습니다.</p>
      ) : (
        <ul className="mt-6 divide-y">
          {notices.map((notice) => (
            <li key={notice.id} className="py-4">
              <Link className="font-semibold hover:underline" href={`/notices/${notice.id}`}>
                {notice.title}
              </Link>
              <p className="mt-1 text-sm text-gray-500">
                작성자: {notice.author} · 작성일: {notice.createdAt} · 조회수: {notice.views}
              </p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
