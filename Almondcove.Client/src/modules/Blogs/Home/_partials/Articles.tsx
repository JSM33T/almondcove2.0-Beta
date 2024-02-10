import { useEffect, useState } from "react"
import { acGetData } from "../../../../library/xhr"
import { Link } from "react-router-dom";


export default function Articles() {

    const [items, setItems] = useState([]);
    
    useEffect(() => {
        getArticles();
    }, [])

    async function getArticles() {
        const resp = await acGetData(`api/blogs`)
        setItems(resp.data);
    }

    return (
        <div>
          
                {items.map((item, index) => (
                    <article className="row g-0 border-0 pt-3 pt-sm-0 mb-4" key={index}>
                        <Link className="col-sm-5 bg-repeat-0 bg-size-cover bg-position-center rounded-5" to={'/blog/' + item.dateCreated.slice(0, 4) + '/' + item.slug}
                            style={{
                                backgroundImage: 'url(' + import.meta.env.VITE_HOST + 'content/blogs/' + item.dateCreated.slice(0, 4) + '/' + item.slug + '/assets/cover.webp)',
                                minHeight: '14rem'
                            }}
                            aria-label="Post image"></Link>
                        <div className="col-sm-7">
                            <div className="pt-4 pb-sm-4 ps-sm-4 pe-lg-4">
                                <h3>
                                    <Link to={'/blog/' + item.dateCreated.slice(0, 4) + '/' + item.slug}>{item.title}</Link>
                                </h3>
                                <p className="d-sm-none d-md-block">{item.description}</p>
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

                ))}
            
        </div>
    )
}

