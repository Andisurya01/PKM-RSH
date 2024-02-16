import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import ListHome from "../components/ListHome/ListHome";
import Navbar from "../components/Navbar/Navbar";
import Searching from "../components/Searching/Searching";

export default function LandingPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <ListHome />
            <Searching />
            <Footer />
        </>
    )
}