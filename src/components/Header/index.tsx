'use client'

import Logo from '@/components/Header/Logo'
import Menu from '@/components/Header/Menu'

export default function Header() {
  return (
    <header>
      <Logo />
      <div>HeaderItem</div>
      <Menu />
    </header>
  )
}
