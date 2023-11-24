import styles from '@/styles/Burger.module.css'
import { IBurger } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

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
