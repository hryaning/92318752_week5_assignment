export type Notice = {
  id: string;
  title: string;
  author: string;
  content: string;
  createdAt: string;
  views: number;
};

const notices: Notice[] = [
  { id: "1", title: "5주차 실습 안내", author: "관리자", content: "공지사항 게시판 실습을 시작합니다.", createdAt: "2026-11-02", views: 0 },
  { id: "2", title: "과제 제출 안내", author: "관리자", content: "GitHub와 Vercel 배포 후 제출해주세요.", createdAt: "2026-11-02", views: 0 },
  { id: "3", title: "수업 자료 안내", author: "관리자", content: "PPT 자료를 확인하고 실습을 진행해주세요.", createdAt: "2026-11-02", views: 0 },
];

let nextId = 4;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getNotices(): Promise<Notice[]> {
  await delay(200);
  return [...notices].sort((a, b) => Number(b.id) - Number(a.id));
}

export async function getNotice(id: string): Promise<Notice | undefined> {
  await delay(100);
  return notices.find((notice) => notice.id === id);
}

export async function createNotice(input: {
  title: string;
  author: string;
  content: string;
}): Promise<Notice> {
  await delay(100);
  const notice: Notice = {
    id: String(nextId++),
    ...input,
    createdAt: new Date().toISOString().slice(0, 10),
    views: 0,
  };
  notices.push(notice);
  return notice;
}

export async function increaseNoticeViews(id: string): Promise<void> {
  const notice = notices.find((item) => item.id === id);
  if (notice) notice.views += 1;
}
