// @flow
import * as React from 'react';
import PageContainer from '../components/common/pageContainer';
import twitterLogo from '../static/twitter.png';
import githubLogo from '../static/github.png';

const styles = {
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    img: {
      width: '64px',
      height: '64px',
    },
    marginTop: '.5em',
    flexDirection: 'row',
  },
};

const Contact = () => (
  <PageContainer title="Contact" header>
    <div style={{ fontSize: '20px' }}>
      <div style={{ marginBottom: '2em' }}>
        Pick a Part PC was made as a proof of concept for my portfolio, and is a work in progress.
        If you like what you see, please contact me!
      </div>
      <strong>
        <u>Email</u>
      </strong>
      <p>justin@justinkahrs.com</p>
      <strong>
        <u>Social</u>
      </strong>
      <div style={styles.logo}>
        <a href="https://twitter.com/justin_kahrs">
          <img style={styles.logo.img} src={twitterLogo} alt="Justin Kahrs Twitter Profile" />
        </a>
        <a href="https://github.com/justinkahrs">
          <img style={styles.logo.img} src={githubLogo} alt="Justin Kahrs Github Profile" />
        </a>
      </div>
    </div>
  </PageContainer>
);

export default Contact;
