import styles from '@/styles/Burger.module.css'
import { IBurger } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

const Burger = ({ burger }: { burger: IBurger }) => {
  return (
    <Link className={styles.burgerCard} href={`/burgers/${burger.id}`}>
      <h3>{burger.name}</h3>
      <div className={styles.image}>
        <Image
          src={burger.image}
          alt={burger.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <p>{burger.desc}</p>
      <p>Цена: {burger.price}</p>
    </Link>
  )
}

export default Burger
