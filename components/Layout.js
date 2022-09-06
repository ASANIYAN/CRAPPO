import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";


const Layout = ({ children }) => {
    return (
        <div className="content">
            <Navbar />
            { children }
            <Footer />
        </div>
    );
}
 
export default Layout;