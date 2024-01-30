import { useEffect } from "react";
import Hero from "./Hero";
import MailingList from "./MailingList";
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