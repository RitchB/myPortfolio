import Head from "next/head";
import { FaExclamationTriangle } from "react-icons/fa";

const projects = () => {
  return (
    <>
      <Head>
        <title>Richard Beauregard | Projetcs</title>
        <meta name="keywords" content="Richard Beauregard" />
      </Head>
      <div className="pt-8 flex items-center text-2xl text-stone-600 dark:text-stone-200 antialised font-OverTheRainbow">
        <FaExclamationTriangle className="text-yellow-300" />
        <span>&nbsp; Under Construction</span>
      </div>
    </>
  );
};

export default projects;
