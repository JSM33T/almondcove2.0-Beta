import { useEffect } from "react";
import Hero from "./_partials/Hero";
import MailingList from "./_partials/MailingList";
import { acToast, initParallax } from "../../library/global";
import { Footer } from "../../components/shared/Footer";

export default function Home() {
    useEffect(() => {
        initParallax();
        acToast("home mounted");
    });
    return (
        <>
            <Hero />
            <MailingList />
            <Footer /> 
        </>
    )
}