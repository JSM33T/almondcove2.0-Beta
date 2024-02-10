import { Route, Routes, useLocation } from 'react-router-dom'
import { Navbar } from './components/shared/NavBar'
import React, { Suspense, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import SidePanel from './components/shared/SidePanel';

import BackToTop from './components/shared/BackToTop.tsx';
import UserContextProvider from './context/UserContextProvider.tsx';
import { ToastContainer } from 'react-toastify';
import Loader from './components/shared/Loader.tsx';
import { Footer } from './components/shared/Footer.tsx';

const LazyHome = React.lazy(() => import('./modules/Home/Home'));
const LazyMusic = React.lazy(() => import('./modules/Music/MusicHome'));
const LazyGallery = React.lazy(() => import('./modules/Gallery/GalleryHome'));
const LazyAbout = React.lazy(() => import('./modules/About/About'));
const LazyBlogHome = React.lazy(() => import('./modules/Blogs/Home/BlogHome.tsx'));
const LazyBlogView = React.lazy(() => import('./modules/Blogs/Viewer/BlogView.tsx'));



function App() {

	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});

	}, [pathname])

	return (
		<UserContextProvider>
			<Loader />
			<main className="page-wrapper">
				<Navbar />
				<SidePanel />
				<Suspense fallback={<span></span>}>
					<Routes>
						<Route path='/' element={<LazyHome />} />
						<Route path='about' element={<LazyAbout />} />
						<Route path='music' element={<LazyMusic />} />
						<Route path='gallery' element={<LazyGallery />} />



						<Route path='blogs' element={<LazyBlogHome />} />
						<Route path='blogs/:categorize/:slug' element={<LazyBlogHome />} />
						<Route path='blog/:year/:slug' element={<LazyBlogView />} />
					</Routes>
				</Suspense>
			</main>
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<BackToTop />
			<Footer />
		</UserContextProvider>
	)
}

export default App
