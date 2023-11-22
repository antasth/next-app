import '../about.css'

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header>About page header</header>
      {children}
    </>
  )
}
