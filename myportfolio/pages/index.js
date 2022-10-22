import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section1 from "../components/Section1";
import ArticlesSection from "../components/ArticlesSection";

export default function Home() {
  return (
    <div>
      <Section1 />
      <ArticlesSection />
    </div>
  );
}
