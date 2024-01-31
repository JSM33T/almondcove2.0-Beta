import { Route, Routes, useLocation } from 'react-router-dom'
import { Navbar } from './components/shared/NavBar'
import React, { Suspense, useEffect, useState } from 'react';
import { Footer } from './components/shared/Footer';
import 'react-toastify/dist/ReactToastify.css';

import SidePanel from './components/shared/SidePanel';
import './library/vendor/almondcove.js'
import BackToTop from './components/shared/BackToTop.tsx';
import UserContextProvider from './context/UserContextProvider.tsx';
import { ToastContainer } from 'react-toastify';
import LoadingBar from 'react-top-loading-bar'

const LazyHome = React.lazy(() => import('./modules/Home/Home'));
const LazyAbout = React.lazy(() => import('./modules/About/About'));


function App() {

	const { pathname } = useLocation();
	const [progress, setProgress] = useState(0)
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	useEffect(() => {
		setProgress(50);
		setTimeout(() => { setProgress(100) }, 200)
	}, [pathname])

	return (
		<UserContextProvider>
			<LoadingBar
				color='#434a57'
				progress={progress}
				transitionTime={100}
				waitingTime={800}
				height={2}
				loaderSpeed={500}
				onLoaderFinished={() => setProgress(0)}
			/>
			<main className="page-wrapper">
				<Navbar />
				<SidePanel />
				<Suspense fallback={<span>somethig bout loading and stuff....</span>}>
					<Routes>
						<Route path='/' element={<LazyHome />} />
						<Route path='about' element={<LazyAbout />} />
					</Routes>
				</Suspense>
			</main>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			<BackToTop />
			<Footer />
		</UserContextProvider>
	)
}

export default App
