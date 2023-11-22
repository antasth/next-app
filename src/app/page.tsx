'use client'
import Header from '@/components/Header'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import testImg from '../../public/test.jpg'
import styles from './page.module.css'

export default function Home() {
  const router = useRouter()

  return (
    <main className={styles.main}>
      <Header name={'Alex'} age={'25'}>
        Header message
      </Header>
      <h1>MAIN PAGE</h1>
      <div className={styles.img}>
        <Image src={testImg} alt="test image" className={styles.image} />
      </div>
      {/* <Image src="/test.jpg" width={300} height={200} alt="test image" /> */}
      <h2 onClick={() => router.push('/profile')}>Profile Page</h2>
    </main>
  )
}
