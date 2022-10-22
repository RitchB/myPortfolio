import Link from "next/link";

const ArticlesSection = () => {
  return (
    <div>
      <Link href="/articles">
        <a>
          {" "}
          <p className="font-medium font-yanoneK">Read articles here</p>{" "}
        </a>
      </Link>
    </div>
  );
};

export default ArticlesSection;
