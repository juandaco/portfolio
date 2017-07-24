const initState = {
  showPanel: false,
  projects: [
    {
      title: 'OSFG Directory',
      description: `Main contributor to 
         <a href="https://freecodecamp.org" target="_blank">
           freeCodeCamp
         </a>'s
         "Open Source for Good Directory". An open source applications collection
         for nonprofits.`,
      icon: 'fa-free-code-camp',
      link: 'https://freecodecamp.org/nonprofits',
      repo: 'https://github.com/freecodecamp/open-source-for-good-directory',
      techStack: ['react', 'redux'],
    },
    {
      title: 'Snapterest',
      description: `A pretty cool 
      <a href="https://co.pinterest.com/categories/popular" target="_blank">
      Pinterest
      </a>
        clone with Twitter login, built with
      <a href="https://masonry.desandro.com/" target="_blank">
        Mansory.js
      </a>
      to get the card's nice visual effects.`,
      icon: 'fa-camera-retro',
      link: 'https://snapterest-fcc.herokuapp.com/',
      repo: 'https://github.com/juandaco/snapterest',
      techStack: ['react', 'redux', 'mongodb'],
    },
    {
      title: 'Pollster',
      description: `A Poll creation app with 
        <a href="https://en.wikipedia.org/wiki/Responsive_web_design" target="_balnk">
          Responsive Design 
        </a>
        for mobile devices.
        It has Facebook, Google and Twitter authentication integrated.`,
      icon: 'fa-thumbs-up',
      link: 'https://fcc-pollster.herokuapp.com/',
      repo: 'https://github.com/juandaco/voting-app',
      techStack: ['react', 'redux', 'mongodb'],
    },
    {
      title: 'Nightlife!',
      description: `A social coordination app 
        to explore the city night lifestyle. 
        Powered by the 
        <a href="https://www.yelp.com/developers/documentation/v3" target="_blank">
          Yelp API
        </a>.`,
      icon: 'fa-glass',
      link: 'https://nightlife-fcc-app.herokuapp.com/',
      repo: 'https://github.com/juandaco/voting-app',
      techStack: ['react', 'redux', 'mongodb'],
    },
    {
      title: 'The Book Club',
      description: `A book exchanging platform for trading used books among readers.
       It works with the 
       <a href="https://developers.google.com/books/" target="_blank">
        Google Books API
       </a> .`,
      icon: 'fa-book',
      link: 'https://thebookclub-fcc.herokuapp.com/',
      repo: 'https://github.com/juandaco/booktrading',
      techStack: ['react', 'redux', 'mongodb'],
    },
    {
      title: 'Stock Market Live',
      description: `US Stock Market chart synced through clients with 
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" target="_blank">
          WebSockets
        </a>.
        Financial information is aquired with
        <a href="https://developer.yahoo.com/yql/" target="_blank">
          Yahoo's Finance API
        </a>.`,
      icon: 'fa-line-chart',
      link: 'https://stockmarket-fcc-app.herokuapp.com/',
      repo: 'https://github.com/juandaco/stockmarket',
      techStack: ['react', 'redux', 'mongodb'],
    },
    {
      title: 'Simon Game',
      description: `An accurate replica of a 
        <a href="https://en.wikipedia.org/wiki/Simon_(game)" target="_blank">
          Simon Game
        </a>
        . Built with the 
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API" target="_blank">
          Web Audio API
        </a>
        for sound generation.`,
      icon: 'fa-gamepad',
      link: 'https://codepen.io/juandaco/full/PbbKZa/',
      repo: 'https://codepen.io/juandaco/pen/PbbKZa/',
      techStack: ['jquery'],
    },
    {
      title: 'The Game of Life',
      description: `A 
        <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank">
          Conway's Game of Life
        </a>
        simulation board. Whatch those cells evolve over time!`,
      icon: 'fa-bug',
      link: 'https://codepen.io/juandaco/full/LxPpYy/',
      repo: 'https://codepen.io/juandaco/pen/LxPpYy/',
      techStack: ['react'],
    },
    {
      title: 'Tic-tac-toe',
      description: `Good ol' 
        <a href="https://en.wikipedia.org/wiki/Tic-tac-toe" target="_blank">
          Tic-tac-toe
        </a>
        built with the 
        <a href="https://en.wikipedia.org/wiki/Minimax" target="_blank">
          MinMax
        </a>
        algorithm to be unbeatable.`,
      icon: 'fa-check',
      link: 'https://codepen.io/juandaco/full/YpwbYN/',
      repo: 'https://codepen.io/juandaco/pen/YpwbYN/',
      techStack: ['react'],
    },
    {
      title: 'Calculator',
      description: `A completely functional JavaScript Calculator, 
        with a realistic design.`,
      icon: 'fa-calculator',
      link: 'https://codepen.io/juandaco/full/wzZRzb/',
      repo: 'https://codepen.io/juandaco/pen/wzZRzb/',
      techStack: ['react'],
    },
  ],
};

export default initState;
