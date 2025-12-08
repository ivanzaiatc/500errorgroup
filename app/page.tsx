import Post from "./components/Post";
import { posts } from "./data/posts";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      {posts.map((post, index) => (
        <Post
          key={index}
          data={post.data}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
}
