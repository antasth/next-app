'use client'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'
export default function Profile() {
  const router = useRouter()

  console.log(router)

  return (
    <div>
      <h1>PROFILES LIST</h1>
      <ul className={styles.list}>
        <li onClick={() => router.push('/profile/1')}>profile 1</li>
        <li onClick={() => router.push('/profile/2')}>profile 2</li>
        <li onClick={() => router.push('/profile/3')}>profile 3</li>
      </ul>
    </div>
  )
}
