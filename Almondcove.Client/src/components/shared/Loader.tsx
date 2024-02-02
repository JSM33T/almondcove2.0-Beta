import { useEffect, useState } from "react"


function Loader() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (

        <div className={`page-loading ${isLoading ? 'active' : ''}`}>
            <div className="page-loading-inner">
                <div className="page-spinner"></div>
                <span>Loading...</span>
            </div>
        </div>
    )
}

export default Loader
