import {h, render} from 'preact';

// this holds our rendered root element so we can re-render in response to HMR updates.
let root;

function init() {
  let App = require('./components/App').default;
  root = render(<App />, document.body, root);
}

// initial render!
init();

// If this is webpack-dev-server, set up HMR :)
if (module.hot) module.hot.accept('./components/App', init);
