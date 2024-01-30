import { Suspense } from "react";
import ItemList from "../../components/shared/ItemList";

export default function About() {
    return (
        <>
            <section className='container pt-5'>
                <Suspense fallback={<div>falana</div>}>
                    <ItemList />
                </Suspense>
            </section>
        </>
    )
}