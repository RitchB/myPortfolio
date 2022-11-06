import Head from "next/head";
import { PostCard } from "../../components";
import { getPosts } from "../../data/index";

export default function articles({ posts }) {
  return (
    <div className="bg-red-300">
      <Head>
        <title>Richard Beauregard | Articles</title>
        <meta name="keywords" content="Richard Beauregard" />
      </Head>
      <div>
        <h1>Richard's articles</h1>
      </div>
      <div className="bg-yellow-300">
        {posts.map((post) => (
          <PostCard post={post.node} key={post.node.title} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
