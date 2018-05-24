import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import Typography from 'typography'
import wordpress2010Theme from 'typography-theme-wordpress-2010'


// config typography'
// use without theme plugin
const typography = new Typography({
  overrideStyles: () => ({
    'h1': {
      color: '#00FFFF',
    },
  }),
});
typography.injectStyles(wordpress2010Theme);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
