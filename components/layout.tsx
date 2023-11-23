import Footer from './footer'
import Header from './header'

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="content">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
