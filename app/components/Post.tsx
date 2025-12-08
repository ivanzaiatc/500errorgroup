import { ReactNode } from "react";
import Image from "next/image";

interface PostProps {
  data: string;
  title: string;
  description: ReactNode;
}

export default function Post({ data, title, description }: PostProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-black/50 p-6 transition-colors hover:border-white/20">
      <time className="text-sm text-gray-400">{data}</time>
      <h2 className="mt-2 text-2xl font-semibold text-white">{title}</h2>
      <div className="text-xl text-gray-300 leading-relaxed">
        {description}
      </div>
      <div className="mt-6 flex justify-end">
        <Image
          src="/me.png"
          alt="Signature"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
    </article>
  );
}

