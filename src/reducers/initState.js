const initState = {
  showPanel: false,
  projects: [
    {
      title: 'OSfG Directory',
      description: `Main contributor to 
      <a href="https://freecodecamp.org" target="_blank"> freeCodeCamp</a>'s
         "Open Source for Good Directory".`,
      icon: 'fa-free-code-camp',
      link: 'https://freecodecamp.org/nonprofits',
      repo: 'https://github.com/freecodecamp/open-source-for-good-directory',
      techStack: ['react', 'redux'],
    },
    {
      title: 'Snapterest',
      description: 'A pretty cool Pinterest clone with Twitter login. Built with the Mansory.js library',
      icon: 'fa-camera-retro',
      link: 'https://snapterest-fcc.herokuapp.com/',
      repo: 'https://github.com/juandaco/snapterest',
      techStack: ['react', 'redux', 'mongodb'],
    },
    {
      title: 'Pollster',
      description:
        'A simple Poll creation app with responsive design for mobile devices. It has Facebook, G+ and Twitter authentication integrated.',
      icon: 'fa-thumbs-up',
      link: 'https://fcc-pollster.herokuapp.com/',
      repo: 'https://github.com/juandaco/voting-app',
      techStack: ['react', 'redux', 'mongodb'],
    },
    {
      title: 'Nightlife!',
      description:
        'A social coordination app to explore the city at night. Powered by the Yelp API.',
      icon: 'fa-glass',
      link: 'https://nightlife-fcc-app.herokuapp.com/',
      repo: 'https://github.com/juandaco/voting-app',
      techStack: ['react', 'redux', 'mongodb'],
    },
    {
      title: 'The Book Club',
      description:
        'A book exchanging platform for trading used books among readers. It works with the Google Books API.',
      icon: 'fa-book',
      link: 'https://thebookclub-fcc.herokuapp.com/',
      repo: 'https://github.com/juandaco/booktrading',
      techStack: ['react', 'redux', 'mongodb'],
    },
    {
      title: 'Stock Market Live',
      description:
        'US Stock Market chart synced through clients with WebSockets. Powered by Yahoo Finance API.',
      icon: 'fa-line-chart',
      link: 'https://stockmarket-fcc-app.herokuapp.com/',
      repo: 'https://github.com/juandaco/stockmarket',
      techStack: ['react', 'redux', 'mongodb'],
    },
    {
      title: 'Simon Game',
      description:
        'A cool replica of a Simon Game. Built with the Web Audio API for sound generation.',
      icon: 'fa-gamepad',
      link: 'https://codepen.io/juandaco/full/PbbKZa/',
      repo: 'https://codepen.io/juandaco/pen/PbbKZa/',
      techStack: ['jquery'],
    },
    {
      title: 'The Game of Life',
      description: `A Conway's Game of Life simulation board. Whatch those cells evolve over time!`,
      icon: 'fa-bug',
      link: 'https://codepen.io/juandaco/full/LxPpYy/',
      repo: 'https://codepen.io/juandaco/pen/LxPpYy/',
      techStack: ['react'],
    },
    {
      title: 'Tic-tac-toe',
      description: `Good ol' Tic-tac-toe built with the Min-Max algorithm so it's unbeatable.`,
      icon: 'fa-check',
      link: 'https://codepen.io/juandaco/full/YpwbYN/',
      repo: 'https://codepen.io/juandaco/pen/YpwbYN/',
      techStack: ['react'],
    },
    {
      title: 'Calculator',
      description: `A completely functional JavaScript Calculator, with a realistic feel.`,
      icon: 'fa-calculator',
      link: 'https://codepen.io/juandaco/full/wzZRzb/',
      repo: 'https://codepen.io/juandaco/pen/wzZRzb/',
      techStack: ['react'],
    },
  ],
};

export default initState;
