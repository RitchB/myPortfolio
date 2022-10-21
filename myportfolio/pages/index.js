import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
   <div>
     <h1 className="text-3xl font-bold underline">Hi ! My name is Richard</h1>
     <p> lorem, </p>
     <p> lorem, </p>
     <Link href="/articles">
       <a> Read articles here </a>
     </Link>
   </div>
  )
}
