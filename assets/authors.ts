import CampbellProfileLarge from './img/profile.jpeg';
import { IAuthor, SocialSites } from '../types';
export const CampbellAuthor: IAuthor = {
  name: "Campbell Alden",
  twitterHandle: '@souperman527',
  image: {
    large: CampbellProfileLarge,
  },
  socialLinks: [
    { site: SocialSites.GitHub, url: 'https://www.github.com/CaAlden'},
    { site: SocialSites.Twitter, url: 'https://twitter.com/souperman527'},
  ],
};
