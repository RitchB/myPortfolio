import { getPosts, getPostDetails } from "../../data";
import { PostDetail, AuthorDetail } from "../../components";

export default function PostDetails({ post }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          {/*<AuthorDetail author={post.author} />*/}
        </div>
        <div className="col-span-1 lg:col-span-4"></div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug);
    return {
      props: {
        post: data,
      },
    };
  }

export async function getStaticPaths() {
    const posts = await getPosts();
    return {
      paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
      fallback: true,
    };
  }
