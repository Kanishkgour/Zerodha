import Awards from "./Awards"
import Education from "./Education"
import Pricing from "./Pricing";
import Stats from "./Stats";
import Hero from "./Hero";
import Navbar from "../Navbar";
import Footer from "../Footer";
import OpenAccount from "../OpenAccount";

function HomePage() {
    return (
        <>
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
        </>
    );
}

export default HomePage;