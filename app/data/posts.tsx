import { ReactNode } from "react";

export interface PostData {
  data: string;
  title: string;
  description: ReactNode;
}

export const posts: PostData[] = [
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

