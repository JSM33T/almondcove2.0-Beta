import { useState, useEffect, Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BiSolidLike, BiComment } from 'react-icons/bi';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { acGetData } from '../../../library/xhr';
import { BsFacebook, BsInstagram, BsTelegram, BsTwitter } from 'react-icons/bs';
import axios from 'axios';
import fm from 'front-matter';

function BlogView() {

	const [markdownContent, setMarkdownContent] = useState('');
	const [blogData, setBlogData] = useState(null);
	const { year, slug } = useParams();
	const [frontMatter, setFrontMatter] = useState({ title: '', description: '' });
	const [error, setError] = useState(null);

	useEffect(() => {
		// const fetchMarkdownContent = async () => {
		// 	try {
		// 		const response = await fetch(`${import.meta.env.VITE_HOST}content/blogs/${year}/${slug}/content.md`);
		// 		const data = await response.text();
		// 		setMarkdownContent(data);
		// 	} catch (error) {
		// 		console.error('Error fetching Markdown content:', error);
		// 	}

		// };

		const fetchMarkdown = async () => {
			try {
				const response = await axios.get(`${import.meta.env.VITE_HOST}content/blogs/${year}/${slug}/content.md`);
				const { attributes, body } = fm(response.data);
				setFrontMatter(attributes);
				setMarkdownContent(body);
			} catch (error) {
				setError(`Error fetching Markdown content: ${error.message}`);
			}
		};

		fetchMarkdown();

		const fetchBlogDeets = async () => {
			try {
				const response = await acGetData(`api/blogs/getbyslug/${slug}`);
				setBlogData(response.data);
			} catch (error) {
				console.error('Error fetching Markdown content:', error);
			}
		};

		//fetchMarkdownContent();
		fetchBlogDeets();

	}, []);

	const { title, dateCreated, tags } = blogData || {};
	const tagArray = tags ? tags.split(",").map(tag => tag.trim()) : [];


	if (error) {
		return <div>Error: {error}</div>;
	}


	return (
		<>

			<section className="container py-5 mt-5 mb-md-2 mb-lg-3 mb-xl-4">

				<nav aria-label="breadcrumb">
					<ol className="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
						<li className="breadcrumb-item"><Link to="/">Home</Link></li>
						<li className="breadcrumb-item"><Link to="/blogs">Blog</Link></li>
						<li className="breadcrumb-item active" aria-current="page">{slug}</li>
					</ol>
				</nav>

				<div className="row">
					<div className="col-lg-12 pb-2">
						<h1 className="display-4 pb-2 pb-lg-3">{frontMatter.title}</h1>
						<div className="d-flex flex-wrap align-items-center mt-n2">
							<span className="text-body-secondary fs-sm fw-normal p-0 mt-2 me-3">
								12
								<BiSolidLike className='mx-2' />
							</span>
							<a className="nav-link position-relative text-body-secondary fs-sm fw-normal d-flex align-items-end p-0 mt-2" href="#comments" data-scroll="" data-scroll-offset="60">
								<span className="position-absolute w-100 h-100 top-0 start-0" data-bs-toggle="collapse" data-bs-target="#commentsCollapse"></span>
								4
								<BiComment className='mx-2' />
							</a>
							<span className="fs-xs opacity-20 mt-2 mx-3">|</span>
							<span className="fs-sm text-body-secondary mt-2">{dateCreated}</span>
							<span className="fs-xs opacity-20 mt-2 mx-3">|</span>
							<a className="badge text-nav fs-xs border mt-2" href="#">Inspiration</a>
						</div>
					</div>
				</div>
			</section>
			<section className="container">
				<div className="row">
					<div className="col-lg-9 col-xl-8 pe-lg-4 pe-xl-0">
						<Suspense fallback={<span>loading content....</span>}>
							<ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdownContent}</ReactMarkdown>
						</Suspense>
					</div>

					<aside className="col-lg-3 offset-xl-1 pt-4 pt-lg-0" style={{ marginTop: '-7rem' }}>
						<div className="position-sticky top-0 mt-2 mt-md-3 mt-lg-0" style={{ marginTop: '7rem' }}>
							<h4 className="mb-4">Share this post:</h4>
							<div className="d-flex mt-n3 ms-n3 mb-lg-5 mb-4 pb-3 pb-lg-0">
								<a className="btn btn-outline-secondary btn-icon btn-sm btn-instagram rounded-circle mt-3 ms-3" href="#" aria-label="Instagram">
									<BsInstagram />
								</a>
								<a className="btn btn-outline-secondary btn-icon btn-sm btn-facebook rounded-circle mt-3 ms-3" href="#" aria-label="Facebook">
									<BsFacebook />
								</a>
								<a className="btn btn-outline-secondary btn-icon btn-sm btn-telegram rounded-circle mt-3 ms-3" href="#" aria-label="Telegram">
									<BsTelegram />
								</a>
								<a className="btn btn-outline-secondary btn-icon btn-sm btn-x rounded-circle mt-3 ms-3" href="#" aria-label="X">
									<BsTwitter />
								</a>
							</div>

							<h4 className="pt-xl-1 mb-4">Tags:</h4>
							<div className="d-flex flex-wrap mt-n3 ms-n3 mb-lg-5 mb-4 pb-3 pb-lg-0">
								{tagArray.map((tag: string, index: number) => (
									<Link className="btn btn-outline-secondary rounded-pill mt-3 ms-3" to={'/blogs/tags/' + tag} key={index}>{tag}</Link>
								))}
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


