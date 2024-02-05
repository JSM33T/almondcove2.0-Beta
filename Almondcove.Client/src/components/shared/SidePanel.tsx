import { useRef, useState } from "react"
import { acToast } from "../../library/global";
import { GrConfigure } from "react-icons/gr";


export default function SidePanel() {

    const [Link, SetLink] = useState('https://almondcove.in');
    const preRef = useRef(null);

    function Selection() {
        if (preRef.current) {
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(preRef.current);
            selection.removeAllRanges();
            selection.addRange(range);
        }
        navigator.clipboard.writeText(Link);
        acToast("Link copied");
    }

    return (
        <>
            <a className="position-fixed top-50 bg-light text-dark fw-medium border rounded-pill shadow text-decoration-none"
                style={{
                    right: '-1rem',
                    marginTop: '-1rem',
                    padding: '.25rem 1rem',
                    transform: 'rotate(-90deg)',
                    fontSize: 'calc(var(--ar-body-font-size) * .8125)',
                    letterSpacing: '.075rem',
                    zIndex: 1030,
                }}
                href="#customizer" data-bs-toggle="offcanvas">
                <GrConfigure />
                &nbsp;&nbsp;Panel
            </a>
            <div className="offcanvas offcanvas-end" id="customizer" data-bs-scroll="true" data-bs-backdrop="false">
                <div className="offcanvas-header border-bottom">
                    <h4 className="offcanvas-title">Almondcove 1.9.0</h4>
                    <button className="btn-close" id="closePanel" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">

                    <div className="d-flex align-items-center mb-3"><i className="ai-align-left text-body-secondary fs-4 me-2"></i>
                        <h5 className="mb-0">Updates <span className="text-body-secondary fs-sm fw-normal">(id)</span></h5>

                    </div>
                    <dl className="fs-sm mx-2 text-body-secondary" id="updates-placeholder"></dl>
                    <div className="d-flex align-items-center mb-3">
                        <i className="ai-paint-roll text-body-secondary fs-4 me-2"></i>
                        <h5 className="mb-0">Shortcuts</h5>
                    </div>

                    <button className="btn btn-primary w-100" id="share-btn" type="button" data-bs-toggle="modal" onClick={() => SetLink(window.location.href)}
                        data-bs-target="#shareModal">
                        <i className="ai-code-curly fs-lg me-2 ms-n1"></i>
                        Share
                    </button>

                    <div className="d-flex align-items-center mb-3 mt-3">
                        <i className="ai-paint-roll text-body-secondary fs-4 me-2"></i>
                        <h5 className="mb-0">Report</h5>
                    </div>
                    <form className="form-floating">
                        <textarea className="form-control" id="fl-textarea"
                            placeholder="Your message"></textarea>
                        <label htmlFor="fl-textarea">Your message</label>
                        <div className="form-text">Your password must be 8-20 characters long, contain letters and numbers, and must not
                            contain spaces, special characters, or emoji.</div>
                        <button className="btn btn-primary w-100 mt-3 disabled" id="report-btn" type="button">
                            <i className="ai-code-curly fs-lg me-2 ms-n1"></i>
                            Send report (ID)
                        </button>
                    </form>
                </div>
            </div>
            <div>
                <div className="modal fade " id="shareModal" style={{ display: 'none' }} aria-modal="true" role="dialog">
                    <div className="modal-dialog modal-lg modal-dialog-scrollable" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Share It</h4>
                                <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body py-4">
                                <p className="mb-3 fs-md">
                                    Copy link to clipboard and share the way you want or just use one of
                                    the following social share icons:
                                </p>
                                <div className="overflow-hidden pb-2">
                                    <button className="btn btn-outline-secondary btn-sm">
                                        <i className="ai ai-whatsapp"></i>&nbsp;Whatsapp
                                    </button>
                                    <button className="btn btn-outline-secondary btn-sm">
                                        <i className="ai ai-whatsapp"></i>&nbsp;Twitter
                                    </button>
                                    <button className="btn btn-outline-secondary btn-sm">
                                        <i className="ai ai-whatsapp"></i>&nbsp;Facebook
                                    </button>
                                </div>
                                <div className="bg-secondary overflow-hidden rounded-4">
                                    <pre className="text-wrap bg-transparent border-0 text-dark p-4" ref={preRef}>{Link}</pre>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary w-100 w-sm-auto mb-3 mb-sm-0" type="button" data-bs-dismiss="modal">
                                    Close
                                </button>
                                <button className="btn btn-primary w-100 w-sm-auto ms-sm-3" type="button" id="copy-btn" onClick={Selection}>
                                    <i className="ai-copy me-2 ms-n1"></i>
                                    Copy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}