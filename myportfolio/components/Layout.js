import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-6 lg:px-8 pt-8">
            <Navbar />
            { children }
            <Footer />
        </div>
    )
}

export default Layout;