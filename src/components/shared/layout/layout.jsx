import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Banner from 'components/shared/banner';
import ConversionInitiator from 'components/shared/conversions/landing.simple.tracking';
import CookieBanner from 'components/shared/cookie-banner';
import FloatingButton from 'components/shared/floating-button';
import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import InkeepChatButton from 'components/shared/inkeep-widgets/inkeep-chat-button';
import MobileMenu from 'components/shared/mobile-menu';

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCookieBannerVisible, setIsCookieBannerVisible] = useState(false);

  const handleHeaderBurgerClick = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <ConversionInitiator />
      <Banner />
      <div className="relative flex min-h-screen flex-col">
        <Header isMobileMenuOpen={isMobileMenuOpen} onBurgerClick={handleHeaderBurgerClick} />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileMenu isOpen={isMobileMenuOpen} />
      </div>
      <CookieBanner
        isCookieBannerVisible={isCookieBannerVisible}
        setIsCookieBannerVisible={setIsCookieBannerVisible}
      />
      <FloatingButton isCookieBannerVisible={isCookieBannerVisible} />
      <InkeepChatButton />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
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
