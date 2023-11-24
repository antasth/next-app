import styles from '@/styles/Details.module.css'
import { IBurger } from '@/types'
import { GetStaticPropsContext } from 'next'
import Image from 'next/image'

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3005/items')
  const data = await res.json()

  const paths = data.map((burger: IBurger) => {
    return {
      params: { id: burger.id },
    }
  })

  return { paths, fallback: false }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id
  const res = await fetch(`http://localhost:3005/items/${id}`)
  const data = await res.json()

  return {
    props: {
      burger: data,
    },
  }
}

export const Details = ({ burger }: { burger: IBurger }) => {
  return (
    <div className={styles.singleBurger}>
      <h1>{burger.name}</h1>
      <div className={styles.imageContainer}>
        <Image
          src={burger.image}
          alt={burger.name}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <p>{burger.desc}</p>
      <p>Цена: {burger.price}</p>
    </div>
  )
}

export default Details
