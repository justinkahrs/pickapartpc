import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import 'bootstrap/dist/css/bootstrap.css';

import CaseSelect from '../components/caseSelect';

const styles = {
  textAlign: 'center',
};
const CenterDecorator = storyFn => <div style={styles}>{storyFn()}</div>;

storiesOf('CaseSelect', module)
  .addDecorator(CenterDecorator)
  .add('closed', () => <CaseSelect />);
