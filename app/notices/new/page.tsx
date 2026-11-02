import Link from "next/link";
import { createNoticeAction } from "@/lib/actions";
import { SubmitButton } from "@/components/SubmitButton";

export default function NewNoticePage() {
  return (
    <main className="mx-auto w-full max-w-3xl p-6">
      <h1 className="text-2xl font-bold">공지사항 작성</h1>
      <form action={createNoticeAction} className="mt-6 space-y-4">
        <div>
          <label htmlFor="title" className="mb-1 block">제목</label>
          <input id="title" name="title" type="text" required className="w-full rounded border p-2" />
        </div>
        <div>
          <label htmlFor="author" className="mb-1 block">작성자</label>
          <input id="author" name="author" type="text" required className="w-full rounded border p-2" />
        </div>
        <div>
          <label htmlFor="content" className="mb-1 block">내용</label>
          <textarea id="content" name="content" rows={8} required className="w-full rounded border p-2" />
        </div>
        <SubmitButton label="등록하기" />
      </form>
      <Link className="mt-4 inline-block text-blue-600 hover:underline" href="/notices">취소</Link>
    </main>
  );
}
