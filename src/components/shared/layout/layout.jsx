import clsx from 'clsx';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Banner from 'components/shared/banner';
import ConversionInitiator from 'components/shared/conversions/landing.simple.tracking';
import CookieBanner from 'components/shared/cookie-banner';
import FloatingButton from 'components/shared/floating-button';
import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import MobileMenu from 'components/shared/mobile-menu';

const backgroundColors = {
  'gray-1': 'bg-gray-1',
};

const Layout = ({ headerWithBorder, footerWithBorder, backgroundColor, children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCookieBannerVisible, setIsCookieBannerVisible] = useState(false);

  const handleHeaderBurgerClick = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <ConversionInitiator />
      <Banner />
      <div className="relative flex min-h-screen flex-col">
        <Header
          isMobileMenuOpen={isMobileMenuOpen}
          withBorder={headerWithBorder}
          onBurgerClick={handleHeaderBurgerClick}
        />
        <main
          className={clsx('flex-grow', {
            [backgroundColors[backgroundColor]]: backgroundColor,
          })}
        >
          {children}
        </main>
        <Footer withBorder={footerWithBorder} />
        <MobileMenu isOpen={isMobileMenuOpen} />
      </div>
      <CookieBanner
        isCookieBannerVisible={isCookieBannerVisible}
        setIsCookieBannerVisible={setIsCookieBannerVisible}
      />
      <FloatingButton isCookieBannerVisible={isCookieBannerVisible} />
    </>
  );
};

Layout.propTypes = {
  headerWithBorder: PropTypes.bool,
  footerWithBorder: PropTypes.bool,
  backgroundColor: PropTypes.oneOf(Object.keys(backgroundColors)),
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  headerWithBorder: false,
  footerWithBorder: false,
  backgroundColor: null,
};

export const query = graphql`
  fragment wpPageSeo on WpPage {
    seo {
      title
      description: metaDesc
      defaultDescription: opengraphDescription
      preventIndexing: metaRobotsNoindex
      slug: opengraphUrl
      canonical
      opengraphImage {
        localFile {
          childImageSharp {
            gatsbyImageData(formats: JPG, width: 1200, height: 630)
          }
        }
      }
    }
  }

  fragment wpPostSeo on WpPost {
    seo {
      title
      description: metaDesc
      defaultDescription: opengraphDescription
      preventIndexing: metaRobotsNoindex
      slug: opengraphUrl
      canonical
      opengraphImage {
        localFile {
          childImageSharp {
            gatsbyImageData(formats: JPG, width: 1200, height: 630)
          }
        }
      }
    }
  }
`;

export default Layout;
