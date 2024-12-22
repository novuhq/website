import clsx from 'clsx';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import ConversionInitiator from 'components/shared/conversions/landing.simple.tracking';
import CookieBanner from 'components/shared/cookie-banner';
import FloatingButton from 'components/shared/floating-button';
import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import MobileMenu from 'components/shared/mobile-menu';
import TabletMenu from 'components/shared/tablet-menu';
import UtmParams from 'components/shared/utm-params';
// import Banner from '../banner/banner';

const Layout = ({ className, mainClassName, children, headerTheme = 'default' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCookieBannerVisible, setIsCookieBannerVisible] = useState(false);

  const handleHeaderBurgerClick = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <ConversionInitiator />
      <UtmParams />
      {/* <Banner /> */}
      <div className={clsx('relative flex min-h-screen flex-col', className)}>
        <Header
          theme={headerTheme}
          isMobileMenuOpen={isMobileMenuOpen}
          onBurgerClick={handleHeaderBurgerClick}
        />
        <main className={clsx('flex-grow', mainClassName)}>{children}</main>
        <Footer />
        <TabletMenu isOpen={isMobileMenuOpen} />
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
  className: PropTypes.string,
  mainClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
  headerTheme: PropTypes.oneOf(['default', 'community']),
};

Layout.defaultProps = {
  className: null,
  mainClassName: null,
  headerTheme: 'default',
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
