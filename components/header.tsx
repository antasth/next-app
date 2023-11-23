import { FaHamburger } from 'react-icons/fa'

const Header = () => {
  return (
    <header>
      <div>
        <FaHamburger />
      </div>
      <nav>
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Burgers</a>
        <a href="">Reviews</a>
      </nav>
    </header>
  )
}

export default Header
