import { ReactNode } from "react";

export interface PostData {
  data: string;
  title: string;
  description: ReactNode;
}

export const posts: PostData[] = [
  {
    data: "9 Dec 2025",
    title: "I’m sick today and spent the whole day in bed.",
    description: (
      <>
        <p className="mt-3">Over the past months I’ve learned to accept my body and listen to it.</p>
        <p className="mt-2">You don’t have to be “productive 24/7."</p>
        <p className="mt-2">Some days you’re up, some days you crash — and that’s okay.</p>
        <p className="mt-2">What matters is keeping your direction.</p>
      </>
    ),
  },
  {
    data: "8 Dec 2025",
    title: "Hello World",
    description: (
      <>
        <p className="mt-3">I am building a loyalty SaaS for small businesses.</p>
        <p className="mt-2">Current status: ✅ 1 paying customer</p>
        <p className="mt-2">🎯 Target: 3 paying customers by March 1st, 2026.</p>
        <p className="mt-2">Follow along as I figure this out! 🤙</p>
      </>
    ),
  },
];

