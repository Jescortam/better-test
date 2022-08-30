import Collection from '../interfaces/Collection';

const collections: Collection[] = [
  {
    _id: '2309842098',
    title: 'Object-Oriented Programming',
    contributors: [
      'User123',
      'jescortam',
      'madeuser',
      'mouseisdead',
      'songsforthedeaf',
    ],
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus mauris nunc, eu bibendum ipsum condimentum ut. Etiam semper sagittis feugiat. Nullam non accumsan felis, eget rhoncus tortor. Aenean tempor vehicula tincidunt. Quisque vel consequat libero. Vestibulum ullamcorper metus ac quam malesuada, nec tristique lorem lacinia. Vivamus condimentum posuere est, vitae cursus ipsum fringilla vel. ',
    image: '',
    likes: 10,
    views: 54,
    creationDate: new Date(2350850),
    lastUpdateDate: new Date(2350850),
  },
  {
    _id: '2956818444',
    title: 'Computer Science 101',
    contributors: ['allalone', 'manwithnoname', 'foxnews', 'foxeylady123'],
    description:
      'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus non elementum nunc. Pellentesque porta efficitur lorem in aliquam. Sed imperdiet at purus eu porttitor. Pellentesque tempor dignissim augue non porttitor. Donec pretium pharetra elit, in sodales felis mollis nec. Vestibulum congue...',
    image: '',
    likes: 2,
    views: 45,
    creationDate: new Date(4953943),
    lastUpdateDate: new Date(6935456),
  },
];

export default collections;
