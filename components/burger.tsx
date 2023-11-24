import styles from '@/styles/Burger.module.css'
import Image from 'next/image'
import Link from 'next/link'

interface IBurger {
  id: string
  price: string
  name: string
  image: string
  desc: string
}
const Burger = ({ burger }: { burger: IBurger }) => {
  return (
    <Link className={styles.burgerCard} href={`/burgers/${burger.id}`}>
      <h3>{burger.name}</h3>
      <Image
        className={styles.image}
        src={burger.image}
        alt={burger.name}
        width={0}
        height={0}
        layout="responsive"
        objectFit="cover"
      />
      <p>{burger.desc}</p>
      <p>Цена: {burger.price}</p>
    </Link>
  )
}

export default Burger
