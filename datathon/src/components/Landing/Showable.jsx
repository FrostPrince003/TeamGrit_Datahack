import React from 'react';
import Header from '../Utilities/header';
import Footer from '../Utilities/footer';

const Showable = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        {children} {/* This will render any child components passed to Showable */}
      </div>
      <Footer />
    </>
  );
};

export default Showable;
