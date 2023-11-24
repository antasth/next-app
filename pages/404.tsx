import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const NotFoundPage = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [router])

  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>This page is not exist</h2>
      <p>
        Go <Link href={'/'}>Home</Link>
      </p>
    </div>
  )
}

export default NotFoundPage
