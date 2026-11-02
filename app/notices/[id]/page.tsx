import Link from "next/link";
import { notFound } from "next/navigation";
import { getNotice, increaseNoticeViews } from "@/lib/notices";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function NoticeDetailPage({ params }: Props) {
  const { id } = await params;
  const notice = await getNotice(id);

  if (!notice) notFound();

  // 메모리 기반 실습용 조회수 증가
  await increaseNoticeViews(id);

  return (
    <main className="mx-auto w-full max-w-3xl p-6">
      <h1 className="text-2xl font-bold">{notice.title}</h1>
      <p className="mt-2 text-sm text-gray-500">
        작성자: {notice.author} · 작성일: {notice.createdAt} · 조회수: {notice.views + 1}
      </p>
      <article className="mt-6 whitespace-pre-wrap rounded border p-4">{notice.content}</article>
      <Link className="mt-6 inline-block text-blue-600 hover:underline" href="/notices">
        ← 공지사항 목록으로
      </Link>
    </main>
  );
}
