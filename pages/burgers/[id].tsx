import { IBurger } from '@/types'

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

export const Details = () => {
  return (
    <div>
      <h1>Details</h1>
    </div>
  )
}

export default Details
