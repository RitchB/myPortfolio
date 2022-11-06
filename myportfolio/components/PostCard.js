import moment from "moment";
import Link from "next/link";
import { HiCalendarDays } from "react-icons/hi2";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="text-center mb-8 text-3xl font-CaveatBrush">
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img
            alt={post.author.name}
            height="30px"
            width="30px"
            className="align-middle rounded-full"
            src={post.author.photo.url}
          />
          <p className="inline align-middle ml-2 text-lg font-CaveatBrush">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium font-PTSans">
          <HiCalendarDays className="h-6 w-6 inline mr-2" />
          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>
      <p className="text-center text-lg font-normal px-4 lg:px-20 mb-8 font-PTSans">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/posts/${post.slug}`}>
          <span className="hover:-translate-y-1 inline-block dark:bg-stone-100 bg-stone-300 text-medium font-medium rounded-full dark:text-cardsboxblue text-cardsboxred px-8 py-3 cursor-pointer font-CaveatBrush">
            Read full articles
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
