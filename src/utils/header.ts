interface IOpenGraph {
  title: string;
  description: string;
  image: string;
  image_alt: string;
  url: string;
  type: 'website' | 'article'
  site_name: string;
}
const OG_FIELDS: Array<keyof IOpenGraph> = [
  'title',
  'description',
  'image',
  'image_alt',
  'url',
  'type',
  'site_name',
];

interface ITwitter {
  card: 'summary_large_image' | 'summary'
  site: string; // Twitter Handle
  creator: string; // Twitter Handle
  title: string;
  description: string;
  image: string;
  image_alt: string;
}
const TWITTER_FIELDS: Array<keyof ITwitter> = [
  'card',
  'site',
  'creator',
  'title',
  'description',
  'image',
  'image_alt',
];


const createTwitterData = (meta: Partial<ITwitter>) => TWITTER_FIELDS.reduce((arr, f) => {
  const content = meta[f];
  if (content) {
    return [...arr, ({
      name: `twitter:${f}`,
      content,
    })];
  }
  return arr;
}, []);

const createOGData = (meta: Partial<IOpenGraph>) => OG_FIELDS.reduce((arr, f) => {
  const content = meta[f];
  if (content) {
    return [...arr, ({
      name: `og:${f}`,
      content,
    })];
  }
  return arr;
}, []);

const getHeadTags = () => Array.from(document.querySelectorAll('[data-head-manager]'));
export type MetaData = IOpenGraph & ITwitter;
export const setHeadTags = (meta: Partial<MetaData>) => {
  const oldHeadTags = getHeadTags();
  const tags = [
    ...createTwitterData(meta),
    ...createOGData(meta),
  ];
  const seenTags: string[] = [];

  for (const { name, content } of tags) {
    const tag = oldHeadTags.find(v => v.getAttribute('data-head-manager') === name) ?? document.createElement('meta');
    tag.setAttribute('name', name);
    tag.setAttribute('context', content);
    tag.setAttribute('data-head-manager', name);
    document.head.appendChild(tag);
    seenTags.push(name);
  }

  document.title = meta.title;
  if (meta.description) {
    const desc = document.head.getElementsByTagName('description');
    // Should never be more than one in valid html.
    for (const d of desc) {
      document.head.removeChild(d);
    }
    const newDesc = document.createElement('description');
    newDesc.innerHTML = meta.description;
    document.head.appendChild(newDesc);
  }

  // Cleanup
  for (const tag of oldHeadTags) {
    if (!seenTags.includes(tag.getAttribute('data-head-manager'))) {
      document.head.removeChild(tag);
    }
  }
};

export const getFullHref = (pathname: string) => `${window.location.protocol}//${window.location.host}${pathname}`;
