import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1>Main Page</h1>
      <Link href={'/burgers'}>All burgers</Link>
    </main>
  )
}
