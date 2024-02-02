import { useState, useEffect } from 'react';
// import Markdown from 'react-markdown';
import { BiSolidLike, BiComment } from 'react-icons/bi';

function BlogView() {
  //const [markdownContent, setMarkdownContent] = useState('');
  const [htmlContent, setHtmlContent] = useState('');

  // useEffect(() => {
  //   async function fetchMarkdownContent() {
  //     try {
  //       const response = await fetch('https://localhost:7067/content/blogs/2023/something-nice/content.html');
  //       const markdownText = await response.text();
  //       setMarkdownContent(markdownText);
  //       console.log(response);
  //     } catch (error) {
  //       console.error('Error fetching markdown content:', error);
  //     }
  //   }

  //   fetchMarkdownContent();
  // }, []);
  useEffect(() => {
    // Fetch HTML content from a remote location
    fetch('https://localhost:7067/content/blogs/2023/something-nice/content.html')
      .then(response => response.text())
      .then(data => {
        // Sanitize the HTML content
        //const sanitizedHtml = DOMPurify.sanitize(data);
        setHtmlContent(data);
      })
      .catch(error => {
        console.error('Error fetching HTML content:', error);
      });
  }, []);



  return (
    <>
     
      <section className="container py-5 mt-5 mb-md-2 mb-lg-3 mb-xl-4">

        <nav aria-label="breadcrumb">
          <ol className="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item"><a href="blog-grid-sidebar.html">Blog</a></li>
            <li className="breadcrumb-item active" aria-current="page">Single post v.1</li>
          </ol>
        </nav>

        <div className="row">

          <div className="col-lg-12 pb-2 pb-lg-0 mb-4 mb-lg-0">
            <h1 className="display-4 pb-2 pb-lg-3">How to look for inspiration for new goals in life and remember to give yourself a break?</h1>
            <div className="d-flex flex-wrap align-items-center mt-n2">
              <span className="text-body-secondary fs-sm fw-normal p-0 mt-2 me-3">
                12
                <BiSolidLike className='mx-2'/>
              </span>
              <a className="nav-link position-relative text-body-secondary fs-sm fw-normal d-flex align-items-end p-0 mt-2" href="#comments" data-scroll="" data-scroll-offset="60">
                <span className="position-absolute w-100 h-100 top-0 start-0" data-bs-toggle="collapse" data-bs-target="#commentsCollapse"></span>
                4
                <BiComment className='mx-2'/>
              </a>
              <span className="fs-xs opacity-20 mt-2 mx-3">|</span>
              <span className="fs-sm text-body-secondary mt-2">16 hours ago</span>
              <span className="fs-xs opacity-20 mt-2 mx-3">|</span>
              <a className="badge text-nav fs-xs border mt-2" href="#">Inspiration</a>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-5 my-md-2 my-lg-3 my-xl-4">
        <div className="row pt-xxl-2">
          <div className="col-lg-9 col-xl-8 pe-lg-4 pe-xl-0">
            {/* <Markdown>{markdownContent}</Markdown> */}
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </div>

          <aside className="col-lg-3 offset-xl-1 pt-4 pt-lg-0" style={{ marginTop: '-7rem' }}>
            <div className="position-sticky top-0 mt-2 mt-md-3 mt-lg-0" style={{ marginTop: '7rem' }}>


              <h4 className="mb-4">Share this post:</h4>
              <div className="d-flex mt-n3 ms-n3 mb-lg-5 mb-4 pb-3 pb-lg-0">
                <a className="btn btn-outline-secondary btn-icon btn-sm btn-instagram rounded-circle mt-3 ms-3" href="#" aria-label="Instagram">
                  <i className="ai-instagram"></i>
                </a>
                <a className="btn btn-outline-secondary btn-icon btn-sm btn-facebook rounded-circle mt-3 ms-3" href="#" aria-label="Facebook">
                  <i className="ai-facebook"></i>
                </a>
                <a className="btn btn-outline-secondary btn-icon btn-sm btn-telegram rounded-circle mt-3 ms-3" href="#" aria-label="Telegram">
                  <i className="ai-telegram"></i>
                </a>
                <a className="btn btn-outline-secondary btn-icon btn-sm btn-x rounded-circle mt-3 ms-3" href="#" aria-label="X">
                  <i className="ai-x"></i>
                </a>
              </div>

              <h4 className="pt-xl-1 mb-4">Relevant topics:</h4>
              <div className="d-flex flex-wrap mt-n3 ms-n3 mb-lg-5 mb-4 pb-3 pb-lg-0">
                <a className="btn btn-outline-secondary rounded-pill mt-3 ms-3" href="#">Nature</a>
                <a className="btn btn-outline-secondary rounded-pill mt-3 ms-3" href="#">Inspiration</a>
                <a className="btn btn-outline-secondary rounded-pill mt-3 ms-3" href="#">Travel</a>
                <a className="btn btn-outline-secondary rounded-pill mt-3 ms-3" href="#">Psychology</a>
              </div>


              <h4 className="pt-xl-1 mb-4">Trending posts:</h4>
              <ul className="list-unstyled mb-0">
                <li className="border-bottom pb-3 mb-3">
                  <span className="h6 mb-0">
                    <a href="blog-single-v2.html">Instagram trends that will definitely work and bring results in the new 2022</a>
                  </span>
                </li>
                <li className="border-bottom pb-3 mb-3">
                  <span className="h6 mb-0">
                    <a href="blog-single-v3.html">A session with a psychologist as a personal choice</a>
                  </span>
                </li>
                <li className="border-bottom pb-3 mb-3">
                  <span className="h6 mb-0">
                    <a href="blog-single-v2.html">Travel destinations to inspire and restore resources</a>
                  </span>
                </li>
                <li>
                  <span className="h6 mb-0">
                    <a href="blog-single-v3.html">How to look for inspiration for new goals in life?</a>
                  </span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

    </>


  );
}

export default BlogView;
