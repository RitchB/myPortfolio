import Link from "next/link";

const PageNotFound = () => {
  return (
    <div>
      <p>Oups! Page not found</p>
      <p>
        Go back to{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default PageNotFound