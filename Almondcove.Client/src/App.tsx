import { Route, Routes, useLocation } from 'react-router-dom'
import { Navbar } from './components/shared/NavBar'
import React, { Suspense, useEffect } from 'react';
import { Footer } from './components/shared/Footer';
import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/theme.css'
import './assets/styles/almondcove.mod.css'
import './library/vendor/almondcove.js'
import SidePanel from './components/shared/SidePanel';

import BackToTop from './components/shared/BackToTop.tsx';
import UserContextProvider from './context/UserContextProvider.tsx';
import { ToastContainer } from 'react-toastify';
import Loader from './components/shared/Loader.tsx';

const LazyHome = React.lazy(() => import('./modules/Home/Home'));
const LazyAbout = React.lazy(() => import('./modules/About/About'));
const LazyBlogHome = React.lazy(() => import('./modules/Blogs/Home/BlogHome.tsx'));
const LazyBlogView = React.lazy(() => import('./modules/Blogs/Viewer/BlogView.tsx'));


function App() {

	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0)
		console.log(import.meta.env.VITE_host)
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
						<Route path='blogs' element={<LazyBlogHome />} />
						<Route path='blog' element={<LazyBlogView />} />
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
