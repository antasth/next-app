import styles from '@/styles/Reviews.module.css'
import Head from 'next/head'

interface IReview {
  postId: number
  id: number
  body: string
  email: string
  name: string
}
function Reviews({ reviews }: { reviews: IReview[] }) {
  return (
    <>
      <Head>
        <title>Reviews</title>
        <meta name="title" content="reviews" />
      </Head>
      <div className={styles.reviews}>
        <h1 className={styles.title}>Reviews</h1>
        <ul className={styles.reviews__list}>
          {reviews.length &&
            reviews.map((review) => {
              return (
                <li key={review.id} className={styles.review}>
                  <h3>
                    {review.id} {review.name}
                  </h3>
                  <p>{review.body}</p>
                </li>
              )
            })}
        </ul>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/comments?_limit=10'
  )
  const data = await response.json()
  return {
    props: {
      reviews: data,
    },
  }
}
export default Reviews
