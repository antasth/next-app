'use client'

import Logo from '@/components/Header/Logo'
import Menu from '@/components/Header/Menu'

export default function Header({ props, children }: any) {
  console.log(props)

  return (
    <header>
      <Logo />
      <Menu {...props} />
      <h1>{children}</h1>
    </header>
  )
}
