import { useState, useEffect, Suspense } from 'react';
import Categories from '../Blogs/Home/_partials/Categories';


export default function Test() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense fallback={<Fallback />}>
      {showComponent && <Categories />}
    </Suspense>
  );
}

function Fallback() {
  return (
    <p className="card-text placeholder-glow">
      <span className="placeholder placeholder-sm col-7 me-2"></span>
      <span className="placeholder placeholder-sm col-4"></span>
      <span className="placeholder placeholder-sm col-4 me-2"></span>
      <span className="placeholder placeholder-sm col-6"></span>
      <span className="placeholder placeholder-sm col-8"></span>
    </p>
  );
}

