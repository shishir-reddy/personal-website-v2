module.exports = {
  siteTitle: 'Shishir Reddy | Personal Website',
  siteDescription:
    'Shishir Reddy is an undergraduate CS major at UCI , and enjoys anything and everything related to Machine Learning and Computer Vision.',
  siteKeywords:
    'Shishir Reddy, Shishir, Reddy, shishir-reddy, software engineer, web developer, javascript, UCI, ML, machine learning, CV, computer vision, personal website, website',
  siteUrl: 'https://shishir-reddy.com',
  siteLanguage: 'en_US',
  name: 'Shishir Reddy',
  location: 'Irvine, CA',
  email: 'shishir1@uci.edu',
  github: 'https://github.com/shishir-reddy',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/shishir-reddy',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/shishir-reddy/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
