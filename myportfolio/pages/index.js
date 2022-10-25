import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PresentationSection from '../components/PresentationSection'
import ArticlesSection from '../components/ArticlesSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Richard Beauregard | Home</title>
        <meta name="keywords" content="Richard Beauregard" />
      </Head>
      <div>
        <PresentationSection />
        {/*<br />
        <ArticlesSection />*/}
      </div>
    </>
  );
}
