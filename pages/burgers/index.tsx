import Burger from '@/components/burger'
import styles from '@/styles/BurgersList.module.css'

interface IBurger {
  id: string
  price: string
  name: string
  image: string
  desc: string
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3005/items')
  const data = await res.json()

  return {
    props: { burgers: data },
  }
}

export const Burgers = ({ burgers }: { burgers: IBurger[] }) => {
  console.log(burgers)

  return (
    <>
      <h1>Burgers List</h1>
      <div className={styles.burgers}>
        {burgers.map((burger) => (
          <Burger burger={burger} key={burger.id} />
        ))}
      </div>
    </>
  )
}

export default Burgers
