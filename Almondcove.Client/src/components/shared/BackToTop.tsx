import { useEffect } from 'react';
import { initscrollToTop } from '../../library/global';
import { BsArrowLeft } from 'react-icons/bs';

const BackToTop = () => {


  useEffect(() => {
    initscrollToTop();
  }, []);

  return (
    <a className="btn-scroll-top show" href="#top" data-scroll="" aria-label="Scroll back to top">
      <svg viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" style={{
          strokeDasharray: '118.611',
          strokeDashoffset: '66.7371'
        }}>

        </circle>
      </svg>
      <BsArrowLeft className='mt-2 mx-2'/>
    </a>
  );
};

export default BackToTop;
