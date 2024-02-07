import { useEffect, useState } from "react";
import { acGetData } from "../../../../library/xhr";
import { Link } from "react-router-dom";

export default function Categories() {
    const [items, setItems] = useState([]);
    const year = [2022, 2023, 2024]
    useEffect(() => {
        getCategories();
    }, []);

    async function getCategories() {
        const resp = await acGetData('api/categories');
        setItems(resp.data);
    }
    return (
        <div>
            <h4 className="pt-1 pt-lg-0 mt-lg-n2">Categories:</h4>
            <ul className="nav flex-column mb-lg-5 mb-4">
                {items.map((item, index) => (
                    <li key={index} className="mb-2">
                        <Link className="nav-link d-flex p-0" to={'/blogs/category/' + item.name.toLowerCase()}>
                            {item.name}
                            <span className="fs-sm text-body-secondary ms-2">(2)</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <h4 className="pt-1 pt-lg-0 mt-lg-n2">Year:</h4>
            <ul className="nav flex-column mb-lg-5 mb-4">
                {year.map((item, index) => (
                    <li key={index} className="mb-2">
                        <Link className="nav-link d-flex p-0" to={'/blogs/category/' + item}>
                            {item}
                            <span className="fs-sm text-body-secondary ms-2">(2)</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
