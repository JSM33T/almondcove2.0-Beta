import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

export function Footer() {

    const socialLinks = [
        {
            platform: 'Instagram',
            className: 'btn-instagram',
            iconComponent: () => <BsInstagram/>,
            url: 'https://instagram.com/jsm33t'
        },
        {
            platform: 'Facebook',
            className: 'btn-facebook',
            iconComponent: () => <BsFacebook/>,
            url: 'https://facebook.com/iamjsm33t'
        },
        {
            platform: 'YouTube',
            className: 'btn-youtube',
            iconComponent: () => <BsGithub/>,
            url: 'https://github.com/jsm33t'
        }
    ];
    
    return (
        <>
            <footer className="footer pb-3 pt-sm-3 py-md-4 py-lg-5 bg-secondary">
                <div className="container pb-4 pt-5">
                    <div className="d-md-flex align-items-center justify-content-between pb-1 pb-md-0 mb-4 mb-md-5">
                        <nav className="nav justify-content-center justify-content-md-start pb-sm-2 pb-md-0 mb-4 mb-md-0 ms-md-n3">
                            <Link className="nav-link py-1 px-0 mx-3" to="/faq">FAQs</Link>
                            <Link className="nav-link py-1 px-0 mx-3" to="/changelog">Changelog</Link>
                            <Link className="nav-link py-1 px-0 mx-3" to="/attributions">Attributions</Link>
                        </nav>
                        <div className="d-flex justify-content-center justify-content-md-start me-md-n2">
                            {socialLinks.map((link,index)=>(
                                <a 
                                key={index}
                                className={`btn btn-outline-secondary btn-icon rounded-circle btn-sm ${link.className} me-3`}
                                target="_blank"
                                href={link.url}
                                >
                                    <link.iconComponent/>
                                </a>
                            )
                            )}
                        </div>
                    </div>
                    <div className="d-md-flex align-items-center justify-content-between text-center text-md-start">
                        <a className="nav-link d-inline-block text-body-secondary fs-sm text-decoration-none order-md-2 py-1 px-0 mb-3 mb-md-0" href="/contact">Contact</a>
                        <p className="nav fs-sm order-md-1 mb-0">
                            <span className="text-body-secondary">Made with love</span>
                            <a className="nav-link d-inline fw-normal p-0 ms-1" href="/">Almondcove</a>
                        </p>
                    </div>
                </div>
            </footer>
        </>

    );
}