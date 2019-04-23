import React from 'react';

import TwitterIcon from './Icons/Twitter.svg';
import FacebookIcon from './Icons/Facebook.svg';
import GithubIcon from './Icons/Github.svg';

const App = () => (
  <div>
    <ul>
      <li>
        <TwitterIcon width="40px" height="40px" />
        <a href="https://twitter.com/rwieruch">Twitter</a>
      </li>
      <li>
        <FacebookIcon width="40px" height="40px" />
        <a href="https://www.facebook.com/rwieruch/">Facebook</a>
      </li>
      <li>
        <GithubIcon width="40px" height="40px" />
        <a href="https://github.com/rwieruch">Github</a>
      </li>
    </ul>
    Icons taken from <a href="https://www.flaticon.com/">Flaticon</a>.
  </div>
);

export default App;
