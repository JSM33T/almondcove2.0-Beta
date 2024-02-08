import { useEffect } from "react";
import { Link } from "react-router-dom";

export function Navbar() {

    useEffect(() => {
        const getStoredTheme = (): string | null => localStorage.getItem('theme');
        const setStoredTheme = (theme: string): void => localStorage.setItem('theme', theme);

        const getPreferredTheme = (): string => {
            const storedTheme = getStoredTheme();
            if (storedTheme) {
                return storedTheme;
            }
            return 'light';
        };

        const setTheme = (theme: string): void => {
            if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.setAttribute('data-bs-theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-bs-theme', theme);
            }
        };

        setTheme(getPreferredTheme());

        const showActiveTheme = (theme: string): void => {
            const themeSwitcher = document.querySelector('[data-bs-toggle="mode"]');

            if (!themeSwitcher) {
                return;
            }

            const themeSwitcherCheck = themeSwitcher.querySelector<HTMLInputElement>('input[type="checkbox"]');

            if (theme === 'dark') {
                themeSwitcherCheck!.checked = true;
            } else {
                themeSwitcherCheck!.checked = false;
            }
        };

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            const storedTheme = getStoredTheme();
            if (storedTheme !== 'light' && storedTheme !== 'dark') {
                setTheme(getPreferredTheme());
            }
        });

        document.querySelectorAll('[data-bs-toggle="mode"]').forEach((toggle) => {
            toggle.addEventListener('click', () => {
                const theme = (toggle.querySelector<HTMLInputElement>('input[type="checkbox"]')!.checked === true) ? 'dark' : 'light';
                setStoredTheme(theme);
                setTheme(theme);
                showActiveTheme(theme);
            });
        });
    })

    return (
        <>
            <header>
                <div className="navbar navbar-expand-lg fixed-top bg-light navbar-frost navbar-stuck">
                    <div className="container">
                        <a className="navbar-brand pe-sm-3" href="index.html">
                            <span className="text-primary flex-shrink-0 me-2">
                                <svg width="35" height="32" viewBox="0 0 36 33" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor" d="M35.6,29c-1.1,3.4-5.4,4.4-7.9,1.9c-2.3-2.2-6.1-3.7-9.4-3.7c-3.1,0-7.5,1.8-10,4.1c-2.2,2-5.8,1.5-7.3-1.1c-1-1.8-1.2-4.1,0-6.2l0.6-1.1l0,0c0.6-0.7,4.4-5.2,12.5-5.7c0.5,1.8,2,3.1,3.9,3.1c2.2,0,4.1-1.9,4.1-4.2s-1.8-4.2-4.1-4.2c-2,0-3.6,1.4-4,3.3H7.7c-0.8,0-1.3-0.9-0.9-1.6l5.6-9.8c2.5-4.5,8.8-4.5,11.3,0L35.1,24C36,25.7,36.1,27.5,35.6,29z"></path>
                                </svg>
                            </span>
                            Around
                        </a>

                        <div className="form-check form-switch mode-switch order-lg-2 me-3 me-lg-4 ms-auto" data-bs-toggle="mode">
                            <input className="form-check-input" type="checkbox" id="theme-mode" />
                            <label className="form-check-label" htmlFor="theme-mode">
                                <i className="ai-sun fs-lg"></i>
                            </label>
                            <label className="form-check-label" htmlFor="theme-mode">
                                <i className="ai-moon fs-lg"></i>
                            </label>
                        </div>

                        <a className="btn btn-primary btn-sm fs-sm order-lg-3 d-none d-sm-inline-flex" href="https://almondcove.in" target="_blank" rel="noopener">
                            <i className="ai-cart fs-xl me-2 ms-n1"></i>
                            Live Version
                        </a>

                        <button className="navbar-toggler ms-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <nav className="collapse navbar-collapse" id="navbarNav">
                            {/* <ul className="navbar-nav navbar-nav-scroll me-auto" style="--ar-scroll-height: 520px;"> */}
                            <ul className="navbar-nav navbar-nav-scroll me-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/blogs">Blogs</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/music">Music</Link>
                                </li>
                            </ul>
                            <div className="d-sm-none p-3 mt-n3">
                                <a className="btn btn-primary w-100 mb-1" href="https://almondcove.in/" target="_blank" rel="noopener">
                                    <i className="ai-cart fs-xl me-2 ms-n1"></i>
                                    Live Version
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}