import '../about.css'

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body>
      <header>About page header</header>
      {children}
    </body>
  )
}
