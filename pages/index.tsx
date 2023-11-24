import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Fat burgers</title>
        <meta name="title" content="fat burgers" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Main Page</h1>
        <div className={styles.burger}>
          <Image src="/fatburger.png" alt="burger" width={400} height={300} />
        </div>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam totam,
          eos repudiandae, hic quidem possimus repellendus esse maiores vitae
          tempore autem accusamus cumque rem ducimus doloribus et nam
          laboriosam! Nemo.
        </p>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          voluptate assumenda inventore cupiditate dicta aliquam, perspiciatis
          nisi dolore dolores nulla deserunt! Exercitationem perspiciatis qui
          quia aliquid fugiat tempore ratione. Nemo, voluptatibus laborum nihil
          neque amet ratione sapiente veniam asperiores accusantium in illum vel
          earum optio temporibus, minima, debitis aperiam quo?
        </p>
        <Link href={'/burgers'}>All burgers</Link>
      </main>
    </>
  )
}
