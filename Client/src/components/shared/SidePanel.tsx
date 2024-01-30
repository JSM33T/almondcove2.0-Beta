export default function SidePanel() {
    return (
        <>
            <a className="position-fixed top-50 bg-light text-dark fw-medium border rounded-pill shadow text-decoration-none"
                href="#customizer" data-bs-toggle="offcanvas">
                <i className="ai-settings text-primary fs-base me-1 ms-n1"></i>
                <i className="ai-music text-primary fs-base me-1 ms-n1"></i>
                Panel
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

                    <button className="btn btn-primary w-100" id="share-btn" type="button" data-bs-toggle="modal"
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

        </>
    )
}