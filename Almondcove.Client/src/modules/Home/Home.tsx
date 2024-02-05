import { useEffect } from "react";
import Hero from "./_partials/Hero";
import MailingList from "./_partials/MailingList";
import { initParallax } from "../../library/global";
import { Navbar } from "../../components/shared/NavBar";
import { Footer } from "../../components/shared/Footer";

export default function Home() {
    useEffect(() => {
        initParallax();
    });
    return (
        <>
        <Navbar />
            <Hero />
            <MailingList />
            <Footer /> 
        </>
    )
}