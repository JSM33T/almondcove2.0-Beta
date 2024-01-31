import { useEffect } from "react";
import Hero from "./_partials/Hero";
import MailingList from "./_partials/MailingList";
import { initParallax } from "../../library/global";

export default function Home() {
    useEffect(()=>{
        initParallax();
    });
    return (
        <>
            <Hero/>
            <MailingList />
        </>
    )
}