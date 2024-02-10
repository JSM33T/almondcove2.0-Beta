import Categories from "./_partials/Categories";
import Articles from "./_partials/Articles";
import { Link, useParams } from "react-router-dom";
import { Suspense } from "react";


export default function BlogHome() {
    const { categorize, slug } = useParams();
    return (
        <>
            <div className="container pt-5 pb-lg-5 pb-md-4 pb-2 my-5">
                <nav aria-label="breadcrumb">
                    <ol className="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{categorize} : {slug}</li>
                    </ol>
                </nav>

                <div className="row mb-md-2 mb-xl-4">
                    <div className="col-lg-9 pe-lg-4 pe-xl-5">
                        <h1 className="pb-3 pb-lg-4">Blogs</h1>
                        <Suspense fallback={<>loadingggg</>}>
                            <Articles />
                        </Suspense>
                    </div>

                    <aside className="col-lg-3">
                        <div className="offcanvas-lg offcanvas-end" id="sidebarBlog">
                            <div className="offcanvas-header">
                                <h4 className="offcanvas-title">Sidebar</h4>
                                <button className="btn-close ms-auto" type="button" data-bs-dismiss="offcanvas" data-bs-target="#sidebarBlog" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">

                                <div className="position-relative mb-4 mb-lg-5">
                                    <i className="ai-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                                    <input className="form-control ps-5" type="search" placeholder="Enter keyword" />
                                </div>
                                <Suspense fallback={<p className="card-text placeholder-glow">
                                    <span className="placeholder placeholder-sm col-7 me-2"></span>
                                    <span className="placeholder placeholder-sm col-4"></span>
                                    <span className="placeholder placeholder-sm col-4 me-2"></span>
                                    <span className="placeholder placeholder-sm col-6"></span>
                                    <span className="placeholder placeholder-sm col-8"></span>
                                </p>
                                }>
                                    <Categories />
                                </Suspense>

                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    )
}