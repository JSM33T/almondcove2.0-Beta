import { Link } from "react-router-dom";

export function Footer()
{
    return(
        <>
        ================================================<br/>
        Hey there, me is the footer
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
        </>
        
    );
}