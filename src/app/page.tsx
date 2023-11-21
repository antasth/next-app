'use client'
import Header from '@/components/Header'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'

export default function Home() {
  const router = useRouter()
  return (
    <main className={styles.main}>
      <Header />
      <h1>MAIN PAGE</h1>
      <h2 onClick={() => router.push('/profile')}>Profile Page</h2>
    </main>
  )
}
