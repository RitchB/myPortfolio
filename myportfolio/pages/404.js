import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const PageNotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 5000)
    }, [])

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

export default PageNotFound;
