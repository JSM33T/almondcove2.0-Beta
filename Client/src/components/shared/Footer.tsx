import { Link } from "react-router-dom";

export function Footer() {
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
                            <a className="btn btn-icon btn-sm btn-secondary btn-instagram rounded-circle mx-2" href="https://instagram.com/jsm33t" aria-label="Instagram"><i className="ai-instagram"></i></a>
                            <a className="btn btn-icon btn-sm btn-secondary btn-facebook rounded-circle mx-2" href="https://www.facebook.com/almondcovepage" aria-label="Facebook"><i className="ai-facebook"></i></a>
                            <a className="btn btn-icon btn-sm btn-secondary btn-linkedin rounded-circle mx-2" href="https://github.com/JSM33T/AlmondCove" aria-label="Github"> <i className="ai-github"></i></a>
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