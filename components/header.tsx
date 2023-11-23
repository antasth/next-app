import Link from 'next/link'
import { FaHamburger } from 'react-icons/fa'

const Header = () => {
  return (
    <header>
      <div>
        <FaHamburger />
      </div>
      <nav>
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About Us</Link>
        <Link href={'/review'}>Reviews</Link>
        <Link href={'/burgers'}>Burgers</Link>
      </nav>
    </header>
  )
}

export default Header
