import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/shared/NavBar'
import React, { Suspense, useEffect } from 'react';
import { Footer } from './components/shared/Footer';

import SidePanel from './components/shared/SidePanel';
import './library/vendor/almondcove.js'
import ThemeSwitch from './library/theme.ts';
import BackToTop from './components/shared/BackToTop.tsx';
import UserContextProvider from './context/UserContextProvider.tsx';

const LazyHome = React.lazy(() => import('./modules/Home/Home'));
const LazyAbout = React.lazy(() => import('./modules/About/About'));


function App() {
	useEffect(() => {
		ThemeSwitch;
	});
	return (
		<UserContextProvider>
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
			<BackToTop />
			<Footer />
		</UserContextProvider>
	)
}

export default App
