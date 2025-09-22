import { graphql } from 'gatsby';
import React from 'react';

import Achievements from 'components/pages/contributor/achievements';
import Activity from 'components/pages/contributor/activity';
import Profile from 'components/pages/contributor/profile';
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Separator from 'components/shared/separator';

const ContributorPage = ({
  data: { wpUserAchievement },
  location,
  pageContext: { contributor },
}) => (
  <Layout>
    <div className="safe-paddings pt-44 md:pt-30 sm:pt-22">
      <div className="container-lg grid grid-cols-12 items-start gap-x-8 lg:gap-x-7 md:flex md:flex-col md:gap-x-0">
        <Profile contributor={contributor} />
        <div className="col-span-8 md:w-full">
          <Achievements
            contributor={contributor}
            url={location.href}
            additionalAchievements={wpUserAchievement?.userAchievement.achievementsList}
          />
          <Separator className="px-0 pb-20 pt-8 sm:pb-16" backgroundColor="black" />
          <Activity contributor={contributor} />
        </div>
      </div>
    </div>
    <GetStarted />
  </Layout>
);

export const query = graphql`
  query ($userName: String!) {
    wpUserAchievement(title: { eq: $userName }) {
      userAchievement {
        achievementsList {
          achievementDate
          achievement {
            ... on WpAchievement {
              title
              achievement {
                tooltip
                badge {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(width: 160)
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default ContributorPage;

export const Head = ({ pageContext: { contributor } }) => {
  const pageMetadata = {
    title: `Novu - ${contributor.github || contributor.name}`,
    description: `Come and meet our awesome contributor ${contributor.github || contributor.name}`,
    slug: `/contributors/${contributor.github}/`,
    ogImage: `https://avatars.githubusercontent.com/${contributor.github}?v=3`,
  };
  return <SEO {...pageMetadata} />;
};
