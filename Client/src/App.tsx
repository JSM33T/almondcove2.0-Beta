import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/shared/NavBar'
import React, { Suspense, useEffect } from 'react';
import { Footer } from './components/shared/Footer';
import ThemeSwitch from './library/theme';
import SidePanel from './components/shared/SidePanel';

const LazyHome = React.lazy(() => import('./modules/Home/Home'));
const LazyAbout = React.lazy(() => import('./modules/About/About'));


function App() {
	useEffect(() => {
		ThemeSwitch();
	});
	return (
		<>
			<main className="page-wrapper">
				<Navbar />
				<SidePanel/>
				<Suspense fallback={<span>somethig bout loading and stuff....</span>}>
					<Routes>
						<Route path='/' element={<LazyHome />} />
						<Route path='about' element={<LazyAbout />} />
					</Routes>
				</Suspense>
			</main>
			<Footer />
		</>
	)
}

export default App
