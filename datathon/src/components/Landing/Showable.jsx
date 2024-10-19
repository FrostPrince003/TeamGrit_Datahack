import React from 'react';
import Header from '../Utilities/header';
import Footer from '../Utilities/footer';

const Showable = ({ children }) => {
  return (
    <>
      <div className='w-screen h-screen '>
        <Header />
        <div>
          {children} {/* This will render any child components passed to Showable */}
        </div>
        <Footer />
      </div> {/* Fixed closing tag here */}
    </>
  );
}

export default Showable;
