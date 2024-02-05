//import { useEffect, useState } from "react";
// import axios from "axios";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../../components/shared/Footer";

export default function BlogHome() {


    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7067/api/categories')
            .then(response => {
                
                setItems(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);


    return (
        <>
            <div className="container pt-5 pb-lg-5 pb-md-4 pb-2 my-5">


                <nav aria-label="breadcrumb">
                    <ol className="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Blog list with sidebar</li>
                    </ol>
                </nav>

                <div className="row mb-md-2 mb-xl-4">


                    <div className="col-lg-9 pe-lg-4 pe-xl-5">
                        <h1 className="pb-3 pb-lg-4">Blog list with sidebar</h1>

                        <article className="row g-0 border-0 mb-4">
                            <a className="col-sm-5 bg-repeat-0 bg-size-cover bg-position-center rounded-5" href="blog-single-v1.html"
                                style={{
                                    backgroundImage: 'url(assets/img/blog/list/01.jpg)',
                                    minHeight: '14rem'
                                }}
                                aria-label="Post image"></a>
                            <div className="col-sm-7">
                                <div className="pt-4 pb-sm-4 ps-sm-4 pe-lg-4">
                                    <h3>
                                        <Link to="/blog/2023/top-5-must-watch-series-for-beginners">Business strategy for a brand of vintage bags</Link>
                                    </h3>
                                    <p className="d-sm-none d-md-block">Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus et massa fames ac scelerisque fames velit diam sit...</p>
                                    <div className="d-flex flex-wrap align-items-center mt-n2">
                                        <a className="nav-link text-body-secondary fs-sm fw-normal p-0 mt-2 me-3" href="#">
                                            6
                                            <i className="ai-share fs-lg ms-1"></i>
                                        </a>
                                        <a className="nav-link text-body-secondary fs-sm fw-normal d-flex align-items-end p-0 mt-2" href="#">
                                            12
                                            <i className="ai-message fs-lg ms-1"></i>
                                        </a>
                                        <span className="fs-xs opacity-20 mt-2 mx-3">|</span>
                                        <span className="fs-sm text-body-secondary mt-2">8 hours ago</span>
                                        <span className="fs-xs opacity-20 mt-2 mx-3">|</span>
                                        <a className="badge text-nav fs-xs border mt-2" href="#">Business</a>
                                    </div>
                                </div>
                            </div>
                        </article>


                        <article className="row g-0 border-0 pt-3 pt-sm-0 mb-4">
                            <a className="col-sm-5 bg-repeat-0 bg-size-cover bg-position-center rounded-5" href="blog-single-v2.html"
                                style={{
                                    backgroundImage: 'url(assets/img/blog/list/01.jpg)',
                                    minHeight: '14rem'
                                }}
                                aria-label="Post image"></a>
                            <div className="col-sm-7">
                                <div className="pt-4 pb-sm-4 ps-sm-4 pe-lg-4">
                                    <h3>
                                        <a href="blog-single-v2.html">Top books for inspiration</a>
                                    </h3>
                                    <p className="d-sm-none d-md-block">Sapien ultrices egestas at faucibus eu diam velit diam id amet nibh quam rutrum fermentum diam natoque scelerisque viverra viverra molestie fames...</p>
                                    <div className="d-flex flex-wrap align-items-center mt-n2">
                                        <a className="nav-link text-body-secondary fs-sm fw-normal p-0 mt-2 me-3" href="#">
                                            10
                                            <i className="ai-share fs-lg ms-1"></i>
                                        </a>
                                        <a className="nav-link text-body-secondary fs-sm fw-normal d-flex align-items-end p-0 mt-2" href="#">
                                            4
                                            <i className="ai-message fs-lg ms-1"></i>
                                        </a>
                                        <span className="fs-xs opacity-20 mt-2 mx-3">|</span>
                                        <span className="fs-sm text-body-secondary mt-2">12 hours ago</span>
                                        <span className="fs-xs opacity-20 mt-2 mx-3">|</span>
                                        <a className="badge text-nav fs-xs border mt-2" href="#">Books</a>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <div className="row gy-3 align-items-center mt-lg-5 pt-2 pt-md-4 pt-lg-0">
                            <div className="col col-md-4 col-6 order-md-1 order-1">
                                <div className="d-flex align-items-center">
                                    <span className="text-body-secondary fs-sm">Show</span>
                                    <select className="form-select form-select-flush w-auto">
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="15">15</option>
                                        <option value="25">25</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col col-md-4 col-12 order-md-2 order-3 text-center">
                                <button className="btn btn-primary w-md-auto w-100" type="button">Load more posts</button>
                            </div>
                            <div className="col col-md-4 col-6 order-md-3 order-2">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination pagination-sm justify-content-end">
                                        <li className="page-item active" aria-current="page">
                                            <span className="page-link">1<span className="visually-hidden">(current)</span></span>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                                        <li className="page-item"><a className="page-link" href="#">5</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
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

                                <h4 className="pt-1 pt-lg-0 mt-lg-n2">Categories:</h4>
                                <ul className="nav flex-column mb-lg-5 mb-4">
                                    {items.map((item, index) => (
                                        <li key={index} className="mb-2">
                                            <a className="nav-link d-flex p-0" href="#">
                                                {item.name}
                                                <span className="fs-sm text-body-secondary ms-2">(2)</span> 
                                            </a>
                                        </li>
                                    ))}
                                </ul>


                                {/* <h4 className="pt-3 pt-lg-0 pb-1">Trending posts:</h4>
                                <div className="mb-lg-5 mb-4">
                                    <article className="position-relative d-flex align-items-center mb-4">
                                        <img className="rounded" src="assets/img/blog/sidebar/01.jpg" width="92" alt="Post image"/>
                                            <div className="ps-3">
                                                <h4 className="h6 mb-2">
                                                    <a className="stretched-link" href="blog-single-v1.html">Instagram trends that will definitely work</a>
                                                </h4>
                                                <span className="fs-sm text-body-secondary">13 hours ago</span>
                                            </div>
                                    </article>
                                    <article className="position-relative d-flex align-items-center mb-4">
                                        <img className="rounded" src="assets/img/blog/sidebar/02.jpg" width="92" alt="Post image"/>
                                            <div className="ps-3">
                                                <h4 className="h6 mb-2">
                                                    <a className="stretched-link" href="blog-single-v2.html">A session with a psychologist</a>
                                                </h4>
                                                <span className="fs-sm text-body-secondary">May 12, 2022</span>
                                            </div>
                                    </article>
                                    <article className="position-relative d-flex align-items-center">
                                        <img className="rounded" src="assets/img/blog/sidebar/03.jpg" width="92" alt="Post image"/>
                                            <div className="ps-3">
                                                <h4 className="h6 mb-2">
                                                    <a className="stretched-link" href="blog-single-v3.html">How to look for inspiration for new goals</a>
                                                </h4>
                                                <span className="fs-sm text-body-secondary">June 10, 2022</span>
                                            </div>
                                    </article>
                                </div> */}

                                {/* <h4 className="pt-3 pt-lg-0 pb-1">Join us:</h4>
                                <div className="d-flex mt-n3 ms-n3 mb-lg-5 mb-4 pb-3 pb-lg-0">
                                    <a className="btn btn-secondary btn-icon btn-sm btn-instagram rounded-circle mt-3 ms-3" href="#" aria-label="Instagram">
                                        <i className="ai-instagram"></i>
                                    </a>
                                    <a className="btn btn-secondary btn-icon btn-sm btn-facebook rounded-circle mt-3 ms-3" href="#" aria-label="Facebook">
                                        <i className="ai-facebook"></i>
                                    </a>
                                    <a className="btn btn-secondary btn-icon btn-sm btn-telegram rounded-circle mt-3 ms-3" href="#" aria-label="Telegram">
                                        <i className="ai-telegram"></i>
                                    </a>
                                    <a className="btn btn-secondary btn-icon btn-sm btn-x rounded-circle mt-3 ms-3" href="#" aria-label="X">
                                        <i className="ai-x"></i>
                                    </a>
                                </div> */}

                                {/* <div className="position-relative mb-3">
                                    <div className="position-absolute w-100 text-center top-0 start-50 translate-middle-x pt-4" style={{maxWidth :'15rem'}}>
                                        <h3 className="h2 pt-3 mb-0">Your banner here!</h3>
                                    </div>
                                    <img className="rounded-5" src="assets/img/blog/sidebar/banner.jpg" alt="Banner"/>
                                </div> */}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
            <Footer /> 
        </>
    )
}