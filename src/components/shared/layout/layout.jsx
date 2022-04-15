import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import MobileMenu from 'components/shared/mobile-menu';
import SEO from 'components/shared/seo';

const Layout = ({ seo, children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHeaderBurgerClick = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <SEO {...seo} />
      <div className="flex min-h-screen flex-col">
        <Header isMobileMenuOpen={isMobileMenuOpen} onBurgerClick={handleHeaderBurgerClick} />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileMenu isOpen={isMobileMenuOpen} />
      </div>
    </>
  );
};

Layout.propTypes = {
  seo: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    ogImage: PropTypes.string,
    slug: PropTypes.string,
    preventIndexing: PropTypes.bool,
    keywords: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  seo: null,
};

export default Layout;
