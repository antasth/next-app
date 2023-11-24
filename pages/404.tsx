import Link from 'next/link'

const NotFoundPage = () => {
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
